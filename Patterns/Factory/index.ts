interface IInsurance {
  id: number;
  status: number;
  setVehicle(vehicle: any): void;
  submit(): Promise<boolean>;
}

class TFInsurance implements IInsurance {
  id: number;
  status: number;
  private vehicle: any;

  setVehicle(vehicle: any): void {
    this.vehicle = vehicle;
  }

  async submit(): Promise<boolean> {
    const res = await fetch('', {
      method: 'POST',
      body: JSON.stringify({ vehicle: this.vehicle }),
    });
    const data = await res.json();
    return data.isSuccess;
  }
}

// Another company class that also implements this interface

abstract class InsuranceFactory {
  db: any;
  abstract createInsurance(): IInsurance;

  saveHistory(ins: IInsurance) {
    this.db.save(ins.id, ins.status);
  }
}

class TFInsuranceFactory extends InsuranceFactory {
  createInsurance(): IInsurance {
    return new TFInsurance();
  }
}

// class ABInsuranceFactory extends InsuranceFactory {
//     createInsurance(): IInsurance {
//       return new ABInsurance();
//     }
//   }

const tfInsuranceFactory = new TFInsuranceFactory();
const ins = tfInsuranceFactory.createInsurance();
tfInsuranceFactory.saveHistory(ins);
