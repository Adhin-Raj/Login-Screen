import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import DateTimePicker, {
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";

interface DateInputProps {
  iconPath?: ImageSourcePropType;
  customPathStyle?: Object;
  handleDateChange: (event: DateTimePickerEvent, date?: Date) => void;
  formValue: string;
  showTimePicker: boolean;
  setShowTimePicker: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function DateInput({
  iconPath,
  customPathStyle,
  handleDateChange,
  formValue,
  showTimePicker,
  setShowTimePicker,
}: DateInputProps) {

  return (
    <View style={styles.inputStyle}>
      <TouchableOpacity onPress={() => setShowTimePicker(true)}>
        <TextInput
          value={formValue  ? formValue : ""}
          placeholder="Date Of Birth"
          editable={false}
        />
        <Image source={iconPath} style={[styles.icons, customPathStyle]} />
      </TouchableOpacity>

      {showTimePicker && (
        <DateTimePicker
          value={new Date()}
          mode="date"
          display={"spinner"}
          onChange={handleDateChange}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  inputStyle: {
    backgroundColor: "#F5F5F5",
    marginInline: 24,
    position: "relative",
    paddingLeft: 36,
    paddingRight: 36,
  },
  icons: {
    position: "absolute",
    left: -26,
    top: 13,
    width: 16,
    height: 16,
  },
});
