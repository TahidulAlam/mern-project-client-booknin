/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#E4E4E4",
  },
  section: {
    width: 400,
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  pdf: {
    height: 600,
    width: 400,
  },
});
const PdfBook = ({ data }) => {
  return (
    <Document>
      <Page style={styles.page}>
        <View style={styles.section}>
          <Text>{data}</Text>
        </View>
      </Page>
    </Document>
  );
};

export default PdfBook;
