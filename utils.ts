export default class Utils {
  static convertToKilos(amount: string): string {
    const convertedNumber = Math.round(Number(amount) / 2.20462)
    return String(convertedNumber)
  }

  static convertToPounds(amount: string): string {
    const convertedNumber = Math.round(Number(amount) * 2.20462)
    return String(convertedNumber)
  }
}
