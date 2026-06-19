const notifications = [
  {
    id: 1,
    name: "Mark Webber",
    avatar: "assets/images/avatar-mark-webber.webp",
    action: "reacted to your recent post",
    target: "My first tournament today!",
    time: "1m ago",
    unread: true
  },
  {
    id: 2,
    name: "Angela Gray",
    avatar: "assets/images/avatar-angela-gray.webp",
    action: "followed you",
    target: "",
    time: "5m ago",
    unread: true
  },
  {
    id: 3,
    name: "Jacob Thompson",
    avatar: "assets/images/avatar-jacob-thompson.webp",
    action: "has joined your group",
    target: "Chess Club",
    time: "1 day ago",
    unread: true
  },
  {
    id: 4,
    name: "Rizky Hasanuddin",
    avatar: "assets/images/avatar-rizky-hasanuddin.webp",
    action: "sent your a private message",
    time: "5 days ago",
    unread: true
  }
];

function renderNotifications() {
  const notifList = document.getElementById("notif-list");

  notifList.innerHTML = "";

  notifications.forEach(notification => {
    const notificationHTML = `
      <div class="notif-item ${notification.unread ? "unread" : ""}">
        <img src="${notification.avatar}" alt="${notification.name}">
        
        <div class="notif-content">
          <p>
            <strong>${notification.name}</strong>
            ${notification.action}
            <span class="notif-target">${notification.target}</span>
            ${notification.unread ? '<span class="unread-dot"></span>' : ''}
          </p>

          <span class="notif-time">${notification.time}</span>
        </div>
      </div>
    `;

    notifList.innerHTML += notificationHTML;
  });
}

function updateUnreadCount() {
  const unreadCount = notifications.filter(
    notification => notification.unread
  ).length;

  document.getElementById("notif-unreadCount").textContent = unreadCount;
}

document
  .getElementById("mark-as-read")
  .addEventListener("click", () => {

    notifications.forEach(notification => {
      notification.unread = false;
    });

    renderNotifications();
    updateUnreadCount();
  });

renderNotifications();
updateUnreadCount();