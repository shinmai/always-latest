(() => {
  "user strict"
  const getReadyToRun = setInterval(() => {
    if (document.readyState === "complete" && document.getElementsByTagName("h2").length > 2) {
      clearInterval(getReadyToRun)
      if(window.location.host != "twitter.com" || window.location.pathname != "/home") return
      let entry = document.querySelector("a[href='/settings/content_preferences']")
      if(!entry) return
      let link = entry.previousSibling
      if(!link) return
      if(link.innerText.split('\n')[1].toLowerCase().indexOf('see top tweets')) return
      link.click()
    }
  }, 10)
})()
