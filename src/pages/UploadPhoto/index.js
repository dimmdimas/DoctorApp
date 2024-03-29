import React, { useState} from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { IconAddPhoto, IconRemovePhoto, ILNullPhoto } from '../../assets'
import { Gap, Header, Link, Tombol} from '../../components'
import { colors, fonts, showError, storeData } from '../../utils';
import ImagePicker from 'react-native-image-picker';
import { showMessage } from "react-native-flash-message";
import { Fire } from '../../config';

const UploadPhoto = ({ navigation, route}) => {
    const {fullName, profession, uid} = route.params
    const [photoForDB, setphotoForDB] = useState('')
    const [hasPhoto, sethasPhoto] = useState(false)
    const [photo, setphoto] = useState(ILNullPhoto)

    const getImage = () => {
        ImagePicker.launchImageLibrary({includeBase64: true, quality: 0.5, maxHeight: 200, maxWidth: 200},(response) => {
            // Same code as in above section!
            console.log('response: ', response);
            if(response.didCancel || response.error){
                showError('oops, sepertinya anda tidak memilih fotonya?')
            }else{
                setphotoForDB(`data:${response.type};base64, ${response.data}`)
                const source = { uri: response.uri }
                setphoto(source)
                sethasPhoto(true)
            }
        });
    }

    const uploadAndContinue= () => {
        Fire.database()
            .ref(`doctors/${uid}/`)
            .update({ photo: photoForDB });

            const data = route.params
            data.photo = photoForDB

            storeData('user', data)
            
            navigation.replace('MainApp')
    }

    return (
        <View style={styles.page}>
            <Header title="Upload Photo"/>
            <View style={styles.content}>
            <View style={styles.profile}>
                <TouchableOpacity style={styles.avatarWrapper} onPress={getImage}>
                    <Image source={photo} style={styles.avatar} />
                    {!hasPhoto && <IconAddPhoto style={styles.addPhoto} />}
                    {hasPhoto && <IconRemovePhoto style={styles.addPhoto}/>}
                </TouchableOpacity>
                <Text style={styles.name}>{fullName}</Text>
                <Text style={styles.profession}>{profession}</Text>
            </View>
                <View>
                    <Tombol title="Upload and Continue" onPress={uploadAndContinue} disable={!hasPhoto} />
                    <Gap height={30} />
                    <Link title="Skip for this" align="center" size={16} onPress={() => navigation.replace('MainApp')} />
                </View>    
            </View>
            
        </View>
    );
};

export default UploadPhoto;

const styles = StyleSheet.create({
    avatar: {
        width: 110, 
        height: 110,
        borderRadius: 110/2
    },
    avatarWrapper: {
        width: 130, 
        height: 130, 
        borderWidth: 1,
        borderColor: colors.border,
        borderRadius: 130 / 2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    page: {
        flex: 1,
        backgroundColor: colors.white
    },
    addPhoto: {
        position: 'absolute',
        bottom: 8,
        right: 6
    },
    name: {
        fontSize: 24,
        color: colors.text.primary,
        fontFamily: fonts.primary[600],
        textAlign: 'center'
    },
    profession: {
        fontSize: 18, 
        fontFamily: fonts.primary.normal,
        textAlign: 'center',
        color: colors.text.secondary
    },
    content: {
        paddingHorizontal: 40,
        flex: 1,
        justifyContent: 'space-between',
        paddingBottom: 64
    },
    profile: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center'
    }
});
