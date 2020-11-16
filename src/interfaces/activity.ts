export default interface IActivity {
  _id: string;
  name: string;
  kalacheCapital: string;
  lifeAspect: string;
  totalInvest: string;
  enrollQuantity: string;
  start: Date;
  end: Date;
  cycleQuantity: string;
  attendantQuantity?: number;
  cycles: [
    { cycleNumber: number; attendantQuantity: number; unitaryInvest: number }
  ];
}
