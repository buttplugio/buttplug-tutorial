import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import { ButtplugClient, ButtplugClientDevice } from "buttplug";

@Component({})
export default class DiscoverDevices extends Vue {
  @Prop()
  private client!: ButtplugClient;
  private devices: ButtplugClientDevice[] = [];

  public mounted() {
    this.client.addListener("deviceadded", this.DeviceAdded);
    this.client.addListener("deviceremoved", this.DeviceRemoved);
  }

  public async FindDevices() {
    await this.client.StartScanning();
  }

  public DeviceAdded(device: ButtplugClientDevice) {
    this.devices.push(device);
  }

  public DeviceRemoved(device: ButtplugClientDevice) {
    this.devices = this.devices.filter((x) => x !== device);
  }
}