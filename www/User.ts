export interface IUserOptions {
  gid?: number;
  kGroupGIDs?: number[];
  kMulticastGroupGIDs?: number[];
  lastConnectedTime?: number;
  latitude?: number;
  locationAccuracy?: number;
  locationTimestamp?: number;
  longitude?: number;
  name?: string;
}

export default class User {
  public static createUser(name: string, gid: number) {
    return new User({ name, gid });
  }

  public gid: number;
  public kGroupGIDs: number[];
  public kMulticastGroupGIDs: number[];
  public lastConnectedTime: number;
  public latitude: number;
  public locationAccuracy: number;
  public locationTimestamp: number;
  public longitude: number;
  public name: string;

  /**
   * A model representing the current goTenna User. There is typically only one instance of this class via UserDataStore
   */
  public constructor(options?: IUserOptions) {
    if (options) {
      this.gid = options.gid || 0;
      this.kGroupGIDs = options.kGroupGIDs || [];
      this.kMulticastGroupGIDs = options.kMulticastGroupGIDs || [];
      this.lastConnectedTime = options.lastConnectedTime || null;
      this.latitude = options.latitude || null;
      this.locationAccuracy = options.locationAccuracy || null;
      this.locationTimestamp = options.locationTimestamp || null;
      this.longitude = options.longitude || null;
      this.name = options.name || '';
    } else {
      this.gid = 0;
      this.kGroupGIDs = [];
      this.kMulticastGroupGIDs = [];
      this.lastConnectedTime = null;
      this.latitude = null;
      this.locationAccuracy = null;
      this.locationTimestamp = null;
      this.longitude = null;
      this.name = '';
    }
  }

  /**
   * Adds the group GID to the list of the user's valid group GIDs.
   * @param groupGID The group GID to add.
   */
  public addGroupGID(groupGID: number) {
    this.kGroupGIDs.push(groupGID);
  }

  /**
   * Adds the multicast group GID to the list of the user's valid group GIDs.
   * @param groupGID The group GID to add.
   */
  public addMulticstGroupGID(groupGID: number) {
    this.kMulticastGroupGIDs.push(groupGID);
  }

  /**
   * Removes the group GID from the user's list of valid GIDs.
   * @param groupGID The group GID to delete.
   */
  public deleteGroupGID(groupGID: number) {
    const index = this.kGroupGIDs.indexOf(groupGID);
    if (index > -1) {
      this.kGroupGIDs.splice(index, 1);
    }
  }

  /**
   * Removes the group GID from the user's list of valid GIDs.
   * @param groupGID The multicast group GID to delete.
   */
  public deleteMulticastGroupGID(groupGID: number) {
    const index = this.kMulticastGroupGIDs.indexOf(groupGID);
    if (index > -1) {
      this.kMulticastGroupGIDs.splice(index, 1);
    }
  }

  /**
   * The GID (goTenna ID) of this specific user.
   */
  public getGID() {
    return this.gid;
  }

  /**
   * Retrieves the list of the GIDs of all the groups this user belongs to.
   */
  public getGroupGIDs() {
    return this.kGroupGIDs;
  }

  /**
   * The last known time that the user was connected to the goTenna.
   */
  public getLastConnectedTime() {
    return this.lastConnectedTime;
  }

  /**
   * Retrieves the user's last recorded gps location.
   */
  public getLastLocation(): Coordinates {
    return {
      accuracy: this.locationAccuracy,
      altitude: null,
      altitudeAccuracy: null,
      heading: null,
      latitude: this.latitude,
      longitude: this.longitude,
      speed: null
    };
  }

  /**
   * Retrieves the user's last recorded position.
   */
  public getLastPosition(): Position {
    return {
      coords: {
        accuracy: this.locationAccuracy,
        altitude: null,
        altitudeAccuracy: null,
        heading: null,
        latitude: this.latitude,
        longitude: this.longitude,
        speed: null
      },
      timestamp: this.locationTimestamp
    };
  }

  /**
   * Retrieves the list of the GIDs of all the multicast groups this user belongs to.
   */
  public getMulticastGroupGIDs() {
    return this.kMulticastGroupGIDs;
  }

  /**
   * The name of the user i.e.) John Doe.
   */
  public getName() {
    return this.name;
  }

  /**
   * Checks to see if this group GID is already listed as one of the user's valid group GIDs.
   * @param groupGID The group GID to check.
   */
  public hasGroupGID(groupGID: number) {
    return this.kGroupGIDs.includes(groupGID);
  }

  /**
   * Checks to see if this multicast group GID is already listed as one of the user's valid group GIDs.
   * @param groupGID The multicast group GID to check.
   */
  public hasMulticastGroupGID(groupGID: number) {
    return this.kMulticastGroupGIDs.includes(groupGID);
  }

  /**
   * The users initials based on their name. **Note:** this may not work the same as the native SDK.
   */
  public initials() {
    if (this.name) {
      const words = this.name.split(/\s/g);
      const firstLetters = words.map(word => word[0].toUpperCase());
      return firstLetters.join('');
    } else {
      return '';
    }
  }

  /**
   * Sets the GID (goTenna ID) of this specific user.
   * @param gid The GID (goTenna ID) of this specific user.
   */
  public setGID(gid: number) {
    this.gid = gid;
  }

  /**
   * Sets the last known time that the user was connected to the goTenna.
   * @param timestamp The milliseconds timestamp of the last known time that the user was connected to the goTenna.
   */
  public setLastConnectedTime(timestamp: number) {
    this.lastConnectedTime = timestamp;
  }

  /**
   * Sets the user's name i.e.) John Doe.
   * @param name The user's name.
   */
  public setName(name: string) {
    this.name = name;
  }

  /**
   * Updates the user's last recorded location. This location is cached with the user's basic info.
   * @param latitude The user's last recorded latitude.
   * @param longitude The user's last recorded longitude.
   * @param accuracy The horizontal accuracy of the recorded location.
   * @param timestamp The milliseconds timestamp of when the location was recorded.
   */
  public updateLocation(
    latitude: number,
    longitude: number,
    accuracy: number,
    timestamp: number
  ) {
    this.latitude = latitude;
    this.longitude = longitude;
    this.locationAccuracy = accuracy;
    this.locationTimestamp = timestamp;
  }

  /**
   * Updates the user's last recorded position.
   * @param position The user's last recorded position.
   */
  public updatePosition(position: Position) {
    this.latitude = position.coords.latitude;
    this.longitude = position.coords.longitude;
    this.locationAccuracy = position.coords.accuracy;
    this.locationTimestamp = position.timestamp;
  }
}
