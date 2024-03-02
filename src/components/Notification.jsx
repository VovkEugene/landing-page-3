import { notification1 } from "../assets";
import { notificationImages } from "../constants";

const Notification = ({ className, title }) => {
  return (
    <div
      className={`${
        className || ""
      } p-4 pr-6 flex items-center gap-5 border border-n-1/10 rounded-2xl bg-n-9/40 backdrop-blur`}
    >
      <img
        src={notification1}
        alt="image"
        width={62}
        height={62}
        className="rounded-xl"
      />
      <div className="flex-1">
        <h6 className="mb-1 font-semibold text-base">{title}</h6>
        <div className="flex justify-between items-center">
          <ul className="-m-0.5 flex">
            {notificationImages.map((item, index) => (
              <li
                key={index}
                className="w-6 h-6 flex border-2 border-n-12 rounded-full overflow-hidden"
              >
                <img
                  src={item}
                  alt={item}
                  className="w-full"
                  width={20}
                  height={20}
                />
              </li>
            ))}
          </ul>
          <div className="body-2 text-n-13">1m ago</div>
        </div>
      </div>
    </div>
  );
};

export default Notification;
