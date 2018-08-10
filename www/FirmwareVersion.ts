export default class FirmwareVersion {
  private major: string;
  private minor: string;
  private build: string;

  /**
   * A model class that represents a specific version of the firmware.
   * Has helper methods for comparing and displaying firmware versions.
   */
  constructor(firmwareVersionString: string) {
    [this.major, this.minor, this.build] = firmwareVersionString.split('.');
  }

  /**
   * The major revision number for the firmware, this would be '0' in 0.23.02
   */
  get majorRevision() {
    return parseInt(this.major, 10);
  }

  /**
   * The minor revision number for the firmware, this would be '23' in 0.23.02
   */
  get minorRevision() {
    return parseInt(this.minor, 10);
  }

  /**
   * The build revision number for the firmware, this would be '02' in 0.23.02
   */
  get buildRevision() {
    return parseInt(this.build, 10);
  }

  /**
   * The current firmware version represented as a comparable number. Firmware Version 0.23.02 would be represented as 0.2302 Firmware Version 1.00.02 would be represented as 1.0002
   */
  public toFloat() {
    return parseFloat(this.major + '.' + this.minor + this.build);
  }

  /**
   * Returns a string representing the specified firmware version object.
   */
  public toString() {
    return [this.major, this.minor, this.build].join('.');
  }

  /**
   * Returns the primitive value of a FirmwareVersion object.
   */
  public valueOf() {
    return this.toFloat();
  }
}
