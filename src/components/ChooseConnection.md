It looks like you're running {{ OSName }} using the {{ BrowserName }} browser.

You have the following choices for using Intiface:

* Via Intiface Desktop, a downloadable app for Windows, Mac, and Linux.
  * <span v-if="!OSName.includes('Android') && !OSName.includes('iOS')"><router-link to="download-intiface" class="router-link">Continue to Intiface Desktop download instructions</router-link></span> <span v-if="OSName.includes('Android') || OSName.includes('iOS')">You need to be on a desktop OS for this option.</span>
* Via Intiface Web, within the web browser, using a browser that supports WebBluetooth (Chrome or Blink-based browsers on any non-iOS operating system, or <a href='https://apps.apple.com/us/app/webble/id1193531073' class="outward-link" target="_blank">WebBLE on iOS</a>)
  * <span v-if="HasWebBluetooth"><router-link to="create-browser-connection" class="router-link">Continue to Intiface Web connection instructions</router-link></span> <span v-if="!HasWebBluetooth">It does not look like you are using a browser with WebBluetooth, so this option is not available at this time.</span>

