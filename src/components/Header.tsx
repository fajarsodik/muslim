import DailySchedule from "./DailySchedulePrayTime";
import PrayerTimes from "./PrayerTimes";

const Header = () => {
  return (
    <div role="tablist" className="tabs tabs-bordered">
      <input
        type="radio"
        name="my_tabs_1"
        role="tab"
        className="tab"
        aria-label="Today"
      />
      <div role="tabpanel" className="tab-content p-10">
        <PrayerTimes />
      </div>

      <input
        type="radio"
        name="my_tabs_1"
        role="tab"
        className="tab"
        aria-label="Full month"
        defaultChecked
      />
      <div role="tabpanel" className="tab-content p-10">
        Tab content 2
      </div>
    </div>
  );
};

export default Header;
