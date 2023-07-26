const batteryLevel = document.querySelector(".batteryLevel");
const batteryCharging = document.querySelector(".batteryCharging");
const batteryChargingTime = document.querySelector(".batteryChargingTime");
const batteryDisChargingTime = document.querySelector(
  ".batteryDisChargingTime"
);

//? Battery API

const battery = () => {
  if ("getBattery" in navigator) {
    navigator.getBattery().then((battery) => {
      console.log(battery);
      const updateChargeInfo = () => {
        const isCharging = battery.charging ? "Yes" : "No";
        batteryCharging.innerHTML = isCharging;
      };

      // Battery Charging Change
      battery.addEventListener("chargingchange", () => {
        updateChargeInfo();
      });

      // Battery charging time
      const updateChargingTime = () => {
        batteryChargingTime.innerHTML = battery.chargingTime;
      };
      battery.addEventListener("cahrgingtimechange", () => {
        updateChargingTime();
      });
      //Battery Discharging time
      const updateDisChargingTime = () => {
        batteryDisChargingTime.innerHTML = battery.dischargingTime + " sec";
      };
      battery.addEventListener("discahrgingtimechange", () => {
        updateDisChargingTime();
      });

      // Battery Level Change
      const updateLevelChange = () => {
        const level = battery.level;
        batteryLevel.innerHTML = level * 100 + "%";
      };
      battery.addEventListener("levelchange", () => {
        updateLevelChange();
      });
      //Battery status

      const updateAllBatteryInfo = () => {
        updateChargeInfo();
        updateLevelChange();
        updateChargingTime();
        updateDisChargingTime();
      };
      updateAllBatteryInfo();
    });
  }
};

battery();
