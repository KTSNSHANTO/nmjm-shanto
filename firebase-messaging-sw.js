// ---------------------------------------------
// Firebase Messaging Service Worker for Blogger
// NMJM CARE - Created by SHANTO
// ---------------------------------------------

importScripts("https://www.gstatic.com/firebasejs/10.8.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.8.0/firebase-messaging-compat.js");

// Firebase Config
firebase.initializeApp({
  apiKey: "AIzaSyCr2PoGkROnTXULmbcHlmv4Inh88fMxpCQ",
  authDomain: "nmjm-care.firebaseapp.com",
  projectId: "nmjm-care",
  storageBucket: "nmjm-care.firebasestorage.app",
  messagingSenderId: "579916912360",
  appId: "1:579916912360:web:9317dcb63282e8d7ba5b5d",
  measurementId: "G-QTEMV6PSTL"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  const title = payload.notification?.title || "New Message";
  const options = {
    body: payload.notification?.body || "",
    icon: "https://KTSNSHANTO.github.io/nmjm-shanto/icon.png",
    vibrate: [200, 100, 200],
    data: { url: payload.fcmOptions?.link || "/" }
  };

  self.registration.showNotification(title, options);
});

// Click → open site
self.addEventListener("notificationclick", (event) => {
  event.notification.close();
  event.waitUntil(
    clients.openWindow(event.notification.data.url)
  );
});
