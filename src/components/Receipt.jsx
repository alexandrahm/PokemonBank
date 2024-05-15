import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";
import logo  from "/src/resources/Logo.png";
const Receipt = ({ user, service }) => {
const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#E4E4E4",
    padding: 20,
  },
  header: {
    textAlign: "center",
    margin: 10,
  },
  bankLogo: {
    width: 100,
    height: 50,
    alignSelf: "center",
    marginBottom: 15,
  },
  bankName: {
    color: "blue",
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 10,
  },
  section: {
    margin: 20,
    padding: 20,
    backgroundColor: "#fff",
    border: "1px solid #000",
    borderRadius: 5,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 5,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    color: "red",
  },
  value: {
    fontSize: 16,
  },
  divider: {
    borderBottomColor: "#000",
    borderBottomWidth: 1,
    marginVertical: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "blue",
    marginBottom: 10,
  },
  footer: {
    textAlign: "center",
    marginTop: 30,
    fontSize: 14,
  }
});

return (
  <Document>
    <Page size="A4" style={styles.page}>
      <Image source= {logo} style={styles.bankLogo} />
      <View style={styles.header}>
        <Text style={styles.bankName}>PokeBank</Text>
        <Text style={styles.title}>Comprobante de Pago</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.label}>Datos del usuario:</Text>
        <View style={styles.row}>
          <Text style={styles.label}>Nombre:</Text>
          <Text style={styles.value}>{user.nombre}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Saldo actual:</Text>
          <Text style={styles.value}>${user.saldoInicial}</Text>
        </View>
      </View>
      <View style={styles.divider}></View>
      <View style={styles.section}>
        <Text style={styles.label}>Detalles del servicio:</Text>
        <View style={styles.row}>
          <Text style={styles.label}>Nombre del servicio:</Text>
          <Text style={styles.value}>{service.name}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Monto:</Text>
          <Text style={styles.value}>${service.amount}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Fecha de transacción:</Text>
          <Text style={styles.value}>{new Date().toLocaleDateString()}</Text>
        </View>
      </View>
      <Text style={styles.footer}>Gracias por confiar en PokeBank. Para cualquier consulta, no dude en contactarnos.</Text>
    </Page>
  </Document>
);
};

export default Receipt;
