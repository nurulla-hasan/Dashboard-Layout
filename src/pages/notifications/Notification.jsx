import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const notifications = [
  {
    id: 1,
    title: "New message from John Doe",
    description: "Hey, how are you doing?",
    time: "10 minutes ago",
    avatar: "https://github.com/shadcn.png",
  },
  {
    id: 2,
    title: "Your order has been shipped",
    description: "Your order #12345 has been shipped and is on its way.",
    time: "1 hour ago",
    avatar: "https://github.com/shadcn.png",
  },
  {
    id: 3,
    title: "New follower",
    description: "Jane Smith is now following you.",
    time: "2 hours ago",
    avatar: "https://github.com/shadcn.png",
  },
];

const Notification = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Notifications</h1>
      <div className="space-y-4">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className="flex items-start p-4 rounded-lg border"
          >
            <Avatar className="h-9 w-9">
              <AvatarImage src={notification.avatar} alt="Avatar" />
              <AvatarFallback>OM</AvatarFallback>
            </Avatar>
            <div className="ml-4 flex-grow">
              <div className="flex justify-between items-center">
                <h2 className="font-semibold">{notification.title}</h2>
                <p className="text-xs text-gray-500">{notification.time}</p>
              </div>
              <p className="text-sm text-gray-600 mt-1">
                {notification.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notification;