import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  CarouselContentStyle: {
    flex: 1,
    flexDirection: "column",
  },
  PaginationActiveDot: {
    width: 30,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 8,
    backgroundColor: "#35b257",
  },
  PaginationInActiveDot: {
    width: 12,
    height: 12,
    borderRadius: 5,
    marginHorizontal: 5,
    backgroundColor: "#000",
  },
});
