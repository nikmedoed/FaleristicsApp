import {
    Alert,
    Linking,
    Platform,
} from 'react-native';
import qs from 'qs';
import strings from '../config/strings';
import { techMail } from '../config/constants';
import DeviceInfo from 'react-native-device-info';

const getSystemInfo = () =>
    `OS: ${Platform.OS} ${Platform.Version}\n`
    + `Phone: ` + (Platform.OS == "android"
        ? `${Platform.constants.Brand || Platform.constants.Manufacturer} ${Platform.constants.Model}\n`
        : ``)
    + `App version: ${DeviceInfo.getVersion()}(${DeviceInfo.getBuildNumber()})\n`
    + `Bundle: ${DeviceInfo.getBundleId()}\n\n`

const sendMail = async (
    mail = techMail,
    subject = `${strings.settingsStings.mailSubject} ${DeviceInfo.getApplicationName()}`,
    body = getSystemInfo() + strings.settingsStings.mailBody
) => {
    const query = qs.stringify({
        subject: subject,
        body: body
    });
    let url = `mailto:${mail}?${query}`
    Linking.openURL(url)
        .catch(() => Alert.alert(
            strings.settingsStings.mailErrorTitle,
            `${strings.settingsStings.mailError}${mail}`
        ))
};

export default sendMail