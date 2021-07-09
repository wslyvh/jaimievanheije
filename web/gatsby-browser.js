const addScript = url => {
  const script = document.createElement("script")
  script.src = url
  script.async = true
  document.body.appendChild(script)
}
export const onClientEntry = () => {
  console.log("onClientEntry..")
  addScript('/scripts/jquery-1.11.1.min.js')
}

export const onInitialClientRender = () => {
  console.log("onClientEntry..")
  window.onload = () => {
    addScript('https://maps.googleapis.com/maps/api/js?key=AIzaSyCNHRJO3pFmcuw1T8RLthkmH7H7JXaA_cw')
    addScript('/scripts/bootstrap.min.js')
    addScript('/scripts/jquery.easing.js')
    addScript('/scripts/jaimievanheije.js')
  }
}