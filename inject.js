(() => {
  "user strict"
  const getReadyToRun = setInterval(() => {
    if (document.readyState === "complete" && document.getElementsByTagName("h2").length > 2) {
      clearInterval(getReadyToRun)
      if(window.location.host != "twitter.com" || window.location.pathname != "/home") return
      let headings = document.getElementsByTagName("h2"), foundLatest
      for(let heading of headings) {
        if(foundLatest = (heading.textContent.toLowerCase().indexOf("latest tweets") != -1)) break
      }
      if(foundLatest) return
      let db, keyName
      indexedDB.open("localforage", 2).onsuccess = (event) => {
        db = event.target.result
        db.transaction("keyvaluepairs").objectStore("keyvaluepairs").getAllKeys().onsuccess = (event) => {
        event.target.result.forEach((key, i) => { if(key.indexOf("user:") != -1) { keyName = key } })
        if(keyName.indexOf("user:") != -1)
          db.transaction("keyvaluepairs", "readwrite").objectStore("keyvaluepairs").put({useLatest: true, _lastPersisted: 4102448461000}, "user:"+(keyName.split(":")[1])+":rweb.homeTimelineBehavior").onsuccess = (e) => { window.location.reload() }
        }
      }
    }
  }, 10)
})()
