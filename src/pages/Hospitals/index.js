import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import {DummyHospital1, DummyHospital2, DummyHospital3} from '../../assets';
import {ILHospitalBG} from '../../assets/illustration';
import {ListHospital} from '../../components';

import {colors, fonts} from '../../utils';

const Hospitals = () => {
  return (
    <View style={styles.page}>
      <ImageBackground source={ILHospitalBG} style={styles.baground}>
        <Text style={styles.title}>Nearby Hospitals</Text>
        <Text style={styles.desc}>3 tersedia</Text>
      </ImageBackground>
      <View style={styles.content}>
        <ListHospital
          pic={DummyHospital1}
          type="Rumah Sakit "
          name="Citra Bunga Merdeka"
          address="Jln. Surya Sejahtera 20"
        />
        <ListHospital
          pic={DummyHospital2}
          type="Rumah Sakit Anak"
          name="Happy Family Kids"
          address="Jln. Surya Sejahtera 32"
        />
        <ListHospital
          pic={DummyHospital3}
          type="Rumah Sakit Jiwa"
          name="Tingkatan Paling Atas"
          address="Jln. Surya Sejahtera 21"
        />
      </View>
    </View>
  );
};

export default Hospitals;

const styles = StyleSheet.create ({
  page: {
    backgroundColor: colors.secondary,
    flex: 1,
  },
  content: {
    backgroundColor: colors.white,
    flex: 1,
    borderRadius: 20,
    marginTop: -30,
    paddingTop: 14,
  },
  baground: {
    height: 240,
    paddingTop: 30,
  },
  title: {
    fontFamily: fonts.primary[600],
    color: colors.white,
    fontSize: 20,
    textAlign: 'center',
  },
  desc: {
    fontFamily: fonts.primary[300],
    color: colors.white,
    fontSize: 14,
    textAlign: 'center',
    marginTop: 6,
  },
});
