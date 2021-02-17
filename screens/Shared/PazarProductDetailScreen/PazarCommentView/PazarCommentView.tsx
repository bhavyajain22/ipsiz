import React from 'react';
import {View, TouchableOpacity, Image} from 'react-native';
import {styles} from './PazarCommentView.styles';
import {COLORS} from '../../../../assets/colors';
import {globalStyles} from '../../../../assets/globalStyles.styles';
import StarRating from '../../../../components/micro-components/StarRating/StarRating';
import DescriptionTypo from '../../../../components/micro-components/Typography/DescriptionTypo/DescriptionTypo';
import H2Typo from '../../../../components/micro-components/Typography/H2Typo/H2Typo';
import H4Typo from '../../../../components/micro-components/Typography/H4Typo/H4Typo';
import SmallTypo from '../../../../components/micro-components/Typography/SmallTypo/SmallTypo';
import {ISingleProductComment} from '../../../../types/IProductDetailed.type';

const PazarCommentView: React.FC<{
  comments: ISingleProductComment[];
  seeAllClicked: () => void;
}> = ({comments, seeAllClicked}) => {
  return (
    <View style={styles.container}>
      {comments && comments.length ? (
        <>
          <View style={styles.headerContainer}>
            <H2Typo
              text="En Son Yorum"
              textStyle={{color: COLORS.mainPurple}}
            />
            <TouchableOpacity onPress={seeAllClicked}>
              <SmallTypo
                text="Tüm Yorumlar"
                textStyle={{color: COLORS.mainGreen}}
              />
            </TouchableOpacity>
          </View>
          {/* MESSAGE CONTAINER */}
          <View style={styles.messageContainer}>
            <DescriptionTypo
              textStyle={styles.commentText}
              text={comments[0].message}
            />
          </View>
          <View style={styles.authorContainer}>
            <H4Typo
              textStyle={{color: COLORS.mainGreen}}
              text={comments[0].user.firstName + comments[0].user.lastName}
            />
            <StarRating
              containerStyle={globalStyles.marginLeftTen}
              rating={comments[0].rate}
              reviewCount={10}
            />
          </View>
        </>
      ) : (
        <View style={styles.emptyResultContainer}>
          <Image
            source={{
              uri: 'https://www.ipsizcambaz.com/cdn/assets/images/logo.png',
            }}
            style={styles.logoImg}
          />
          <H2Typo
            text="Ürün Hakkında Yorum Bulunmamaktadır."
            textStyle={styles.emptyTextStyle}
          />
        </View>
      )}
    </View>
  );
};

export default PazarCommentView;
