import Service from "../Service/Service";
import "./BlockServices.css";

export default function BlockServices() {
  return (
    <div className="block-services">
      <Service
        ServiceImage={"src/assets/SearchDoctor.svg"}
        ServiceTitle={"Search doctor"}
        ServiceDescription={"Choose your doctor from thousands of specialist, general, and trusted hospitals"}
      />
      <Service
        ServiceImage={"src/assets/OnlinePharmacy.svg"}
        ServiceTitle={"Online pharmacy"}
        ServiceDescription={"Buy your medicines with our mobile application with a simple delivery system"}
      />
      <Service
        ServiceImage={"src/assets/Consultation.svg"}
        ServiceTitle={"Consultation"}
        ServiceDescription={"Free consultation with our trusted doctors and get the best recomendations"}
      />
      <Service
        ServiceImage={"src/assets/DetailsInfo.svg"}
        ServiceTitle={"Details info"}
        ServiceDescription={"Free consultation with our trusted doctors and get the best recomendations"}
      />
      <Service
        ServiceImage={"src/assets/EmergencyCare.svg"}
        ServiceTitle={"Emergency care"}
        ServiceDescription={"You can get 24/7 urgent care for yourself or your children and your lovely family"}
      />
      <Service
        ServiceImage={"src/assets/Tracking.svg"}
        ServiceTitle={"Tracking"}
        ServiceDescription={"Track and save your medical history and health data"}
      />
    </div>
  );
}
