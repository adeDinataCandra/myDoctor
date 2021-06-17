import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, ScrollView, BackHandler, Alert } from 'react-native';
import { Doctor1, Doctor2, Doctor3, DoctorCategoryJson } from '../../assets';
import { DoctorCategory, Gap, HomeProfile } from '../../components';
import NewsItem from '../../components/Molekuls/NewsItem';
import RatedDoctor from '../../components/Molekuls/RatedDoctor';
import { Fonts, colors } from '../../utils';
import {Fire} from '../../config';

const Doctor = ({ navigation }) => {
    const [news, setNews] = useState([]);
    const [categoryDoctor, setCategoriDoctor] = useState([]);
    const [doctors, setDoctors] = useState([]);
    const backActionHandler = () => {
        Alert.alert("Alert!", "Are you sure you want to close this Aplication?", [
          {
            text: "Cancel",
            onPress: () => null,
            style: "cancel"
          },
          { text: "YES", onPress: () => BackHandler.exitApp()
          () }
        ]);
        return true;
      };

      useEffect(() => {
        doctorCategory();
        getTopRatedDoc();
        getNews();
         
        // Add event listener for hardware back button press on Android
        BackHandler.addEventListener("hardwareBackPress", backActionHandler);
    
        return () =>
          // clear/remove event listener
          BackHandler.removeEventListener("hardwareBackPress", backActionHandler);
      }, []);

      const getNews = () => {
        Fire.database()
        .ref('news/')
        .once('value')
        .then(res => {
           
            if(res.val()){
                const data = res.val();
                const filterData = data.filter(el => el !== null);
                setNews(filterData);
                console.log('News :', filterData);
            }
        }).catch(err => {
            console.log(err.message);
        });
      }

      const doctorCategory = () => {
        Fire.database()
        .ref('categori_doctor/')
        .once('value')
        .then(res => {
            if(res.val()){
                const data = res.val();
                const filterData = data.filter(el => el !== null);
                setCategoriDoctor(filterData);
            }
            
        }).catch(err => {
            console.log(err.message);
        });
      }

      const getTopRatedDoc = () => {
          Fire.database()
          .ref('doctors/')
          .orderByChild('rate')
          .limitToLast(3)
          .once('value')
          .then(res => {
              if(res.val()){
                  const oldData = res.val();
                  const data = [];
                  Object.keys(oldData).map(item => {
                      data.push({
                          id: item,
                          data: oldData[item]
                      })
                  })
                  setDoctors(data);
                  console.log('top rated doctors:', data);
              }
              
          })
      }

    return (
        <View style={styles.page}>
            <View style={styles.content}>
                <ScrollView showsVerticalScrollIndicator={false} >
                    <View style={styles.sectionWraper}>
                        <HomeProfile onPress={() => navigation.navigate('UserProfile')} />
                        <Gap height={30} />
                        <Text style={styles.welcome}>Mau konsultasi dengan siapa hari ini ?</Text>
                    </View>
                    <Gap height={16} />
                    <View style={styles.wraperScrol}>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                            <View style={styles.doctorCatWrap}>
                                <Gap width={32} />
                                {
                                    categoryDoctor.map(item => {
                                        return (
                                            <DoctorCategory key={item.id} category={item.category} onPress={() => navigation.navigate('chooseDoctor', item)} />
                                        )
                                    })
                                }
                                <Gap width={22} />
                            </View>
                        </ScrollView>
                    </View>
                    <View style={styles.sectionWraper}>
                        <Text style={styles.sectionLabel}>Top Rated Doctors</Text>
                        {
                            doctors.map( doctor => {
                                return  <RatedDoctor name={doctor.data.fullName} desc={doctor.data.category} pic={{uri: doctor.data.photo}} onPress={() => navigation.navigate('DoctorProfile', doctor)} />
                            })
                        }
                        <Text>Goods News</Text>
                        {
                            news.map(item => {
                                return (
                                    <NewsItem key={item.id} title={item.title} avatar={{uri: item.image}} day={item.date} />
                                )
                            })
                        }
                      
                    </View>
                </ScrollView>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    page: {

        backgroundColor: colors.secondary,
        flex: 1
    },
    content: {
        backgroundColor: colors.white,
        flex: 1,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
    welcome: {
        fontSize: 20,
        fontFamily: Fonts.primary[600],
        maxWidth: 209
    },
    doctorCatWrap: {
        flexDirection: 'row'
    },
    wraperScrol: {
        marginHorizontal: -16
    },
    sectionLabel: {
        fontSize: 16,
        fontFamily: Fonts.primary[600],
        color: colors.text.primary,
        marginTop: 30,
        marginBottom: 16
    },
    sectionWraper: {
        paddingHorizontal: 16
    }

})

export default Doctor;