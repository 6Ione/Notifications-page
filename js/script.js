
const notifications = [
  {
    id: 1,
    name: "Mark Webber",
    avatar: "assets/images/avatar-mark-webber.webp",
    action: "reacted to your recent post",
    target: "React to get crushed",
    time: "1m ago",
    unread: true
  },
  {
    id: 2,
    name: "Angela Gray",
    avatar: "assets/images/avatar-angela-gray.webp",
    action: "followed you",
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
    unread: true,
    message: "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game."
  },
  {
    id: 5,
    name: "Kimberly Smith",
    avatar: "assets/images/avatar-kimberly-smith.webp",
    action: "commented on your picture",
    time: "1 week ago",
    unread: true
  },
  {
    id: 6,
    name: "Nathan Peterson",
    avatar: "assets/images/avatar-nathan-peterson.webp",
    time: "2 weeks ago",
    action: "reacted to your recent post",
    target: "5 end-game strategies to increase your win rate",
    unread: true
  },
  {
    id: 7,
    name: "Anna Kim",
    avatar: "assets/images/avatar-anna-kim.webp",
    time: "2 weeks ago",
    action: "left the group",
    target: "Chess Club",
    unread: true
  }
];

document
  .getElementById("mark-as-read")
  .addEventListener("click", () => {

    notifications.forEach(notification => {
      notification.unread = false;
    });

    renderNotifications();
    updateUnreadCount();
  });

  document.getElementById("notif-list").addEventListener("click", (e) => {
    const notifItem = e.target.closest(".notif-item");

    if (!notifItem) return;
    const id = Number(notifItem.dataset.id);
    const notification = notifications.find(
        notification => notification.id === id
    );

    if (notification.unread) {
        notification.unread = false;

        renderNotifications();
        updateUnreadCount();
    }
});

function renderNotifications() {
  const notifList = document.getElementById("notif-list");

  notifList.innerHTML = "";

  notifications.forEach(notification => {
    const notificationHTML = `
      <div class="notif-item ${notification.unread ? "unread" : ""}"
      data-id="${notification.id}">
        <img src="${notification.avatar}" alt="${notification.name}">
        
        <div class="notif-content">
          <p>
            <strong>${notification.name}</strong>
            ${notification.action}
            ${notification.target
            ? `<strong class="notif-target">${notification.target}</strong>`
            : ""
            }           
            ${notification.unread ? '<span class="unread-dot"></span>' : ''}
          </p>

          <span class="notif-time">${notification.time}</span>

          ${notification.message
            ? `<div class="private-message">${notification.message}</div>`
            : ""
            }
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

renderNotifications();
updateUnreadCount();