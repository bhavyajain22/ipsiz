import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import {FontAwesome5} from '@expo/vector-icons';
import {COLORS} from '../../../assets/colors';
import CustomButton from '../../../components/micro-components/Controls/CustomButton/CustomButton';
import {getMyProfile} from '../../../services/profile-services/my-profile.service';
import {IMyProfile} from '../../../types/response-types/profile-types/my-profile.types';
import {styles} from './MyProfileScreen.styles';

const MyProfileScreen = () => {
  const [myProfile, setMyProfile] = useState<IMyProfile>({
    firstName: '',
    lastName: '',
    email: '',
    date: {
      day: 0,
      mounth: 0,
      year: 0,
    },
    gsm: '',
    emailConfirmed: false,
    gsmConfirmed: false,
  });

  useEffect(() => {
    getMyProfile().then(({data: {data}}) => setMyProfile(data));
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.mainCard}>
        <View style={styles.contentContainer}>
          <View style={styles.profilePicture}>
            <FontAwesome5 name="user" size={50} color={COLORS.mainGreen} />
          </View>
          <View style={styles.textsContainer}>
            <Text style={styles.fullNameText}>Berk Elmas</Text>
            <View style={styles.iconedTextContainer}>
              <FontAwesome5
                name="phone"
                light
                size={15}
                color={COLORS.mainGreen}
              />
              <Text style={styles.iconedText}>{myProfile.gsm}</Text>
              {myProfile.gsmConfirmed && (
                <Text style={styles.verifiedText}>(Onaylandı)</Text>
              )}
            </View>
            <View style={styles.iconedTextContainer}>
              <FontAwesome5
                name="envelope"
                light
                size={15}
                color={COLORS.mainGreen}
              />
              <Text style={styles.iconedText}>{myProfile.email}</Text>
              {myProfile.emailConfirmed && (
                <Text style={styles.verifiedText}>(Onaylandı)</Text>
              )}
            </View>
          </View>
        </View>
        <View style={styles.buttonsContainer}>
          <CustomButton
            containerStyle={styles.editButton}
            color={COLORS.mainGreen}
            textColor="white"
            text="Düzenle"
          />
          <CustomButton
            containerStyle={styles.changePasswordButton}
            color={COLORS.mainPurple}
            textColor="white"
            text="Şifremi Değiştir"
          />
        </View>
      </View>
    </View>
  );
};

export default MyProfileScreen;
