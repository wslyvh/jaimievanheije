using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Configuration;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Mail;
using System.Net.Mime;
using System.Web;
using System.Web.Http;
using System.Web.Mvc;
using Umbraco.Core;
using Umbraco.Core.Logging;
using Umbraco.Web;
using Umbraco.Web.WebApi;

namespace JaimievanHeije.Controllers
{
    public class ContactController : UmbracoApiController
    {
        // POST umbraco/api/contact/post
        public HttpResponseMessage Post([FromBody] MyContactMessage message)
        {
            if (ModelState.IsValid == false)
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ModelState.First().Value.Errors.First().ErrorMessage);
            var umbraco = new UmbracoHelper(UmbracoContext);
            var content = umbraco.TypedContent(message.SettingsNodeId);

            if (content == null)
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, "Please provide a valid node Id to retrieve the settings.");

            var mailTo = content.GetPropertyValue<string>("EmailTo");
            var subject = content.GetPropertyValue<string>("EmailSubject");

            if (string.IsNullOrWhiteSpace(mailTo))
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, string.Format("The EmailTo property on node {0} (Id {1}) does not exists or has not been filled in.", content.Name, content.Id));

            return TrySendMail(message, subject, mailTo)
                ? new HttpResponseMessage(HttpStatusCode.OK)
                : Request.CreateErrorResponse(HttpStatusCode.ServiceUnavailable,
                          "Could not send email. Make sure the server settings in the mailSettings section of the Web.config file are configured correctly.");
        }

        private bool TrySendMail(MyContactMessage message, string subject, string mailTo)
        {
            try
            {
                var mailMsg = new MailMessage();
                mailMsg.To.Add(new MailAddress(mailTo));
                mailMsg.From = new MailAddress(message.Email, message.Name);

                mailMsg.Subject = subject;
                string text = message.Message;
                string html = @"<p>" + message.Message + "</p>";
                mailMsg.AlternateViews.Add(AlternateView.CreateAlternateViewFromString(text, null, MediaTypeNames.Text.Plain));
                mailMsg.AlternateViews.Add(AlternateView.CreateAlternateViewFromString(html, null, MediaTypeNames.Text.Html));

                SmtpClient smtpClient = new SmtpClient();
                smtpClient.Send(mailMsg);
            }
            catch (Exception ex)
            {
                LogHelper.Error<ContactController>("Error sending email", ex);
                return false;
            }

            return true;
        }


        public class MyContactMessage
        {
            public int SettingsNodeId { get; set; }

            [Required(ErrorMessage = "Please provide your name")]
            public string Name { get; set; }

            [Required(ErrorMessage = "Please provide a valid e-mail address")]
            [RegularExpression(@"[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-z0-9])?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?",
                ErrorMessage = "Please provide a valid e-mail address")]
            public string Email { get; set; }

            [Required(ErrorMessage = "Please provide a message")]
            public string Message { get; set; }
        }
    }
}