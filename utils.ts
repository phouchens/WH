export default class Utils {
  static convertToKilos(amount: string): string {
    const convertedNumber = Math.round(Number(amount) / 2.20462)
    return String(convertedNumber)
  }

  static convertToPounds(amount: string): string {
    const convertedNumber = Math.round(Number(amount) * 2.20462)
    return String(convertedNumber)
  }

  static getPercentageAmount(amount: string, percentage: number): string {
    const convertedNumber = Number(amount) * percentage
    return String(convertedNumber)
  }

  static displayPercentageAmountInLbs(amount: string): string {
    return this.convertToPounds(amount)
  }

  static displayPercentageAmountInKgs(amount: string): string {
    return this.convertToKilos(amount)
  }
}
