(() => {
  "user strict"
  const getReadyToRun = setInterval(() => {
    if (document.readyState === "complete" && document.getElementsByTagName("h2").length > 2) {
      clearInterval(getReadyToRun)
      if(window.location.host != "twitter.com" || window.location.pathname != "/home") return
      let entry = document.querySelector("[aria-label='Top Tweets on']")
      if(!entry) return
      entry.click()
      setTimeout(() => {
        let focus = document.querySelector("a[href='/settings/content_preferences']")
        if(!entry) return
        let link = focus.previousSibling
        if(!link) return
        if(link.innerText.split('\n')[1].toLowerCase().indexOf('see top tweets') != -1) return
        link.click()
      }, 100)
    }
  }, 10)
})()
