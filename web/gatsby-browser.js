const addScript = url => {
  const script = document.createElement("script")
  script.src = url
  script.async = true
  document.body.appendChild(script)
}

export const onClientEntry = () => {
  console.log("importing custom javascript...")
  window.onload = () => {
    addScript('https://code.jquery.com/jquery-1.11.1.min.js')
    addScript("https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js")
    addScript('https://maps.googleapis.com/maps/api/js?key=AIzaSyCNHRJO3pFmcuw1T8RLthkmH7H7JXaA_cw')
    addScript('/scripts/jquery.easing.js')
    addScript('/scripts/jaimievanheije.js')
  }
}