import React from 'react';
import {View, TouchableOpacity, Image} from 'react-native';
import {styles} from './CommentView.styles';
import {COLORS} from '../../../../assets/colors';
import {globalStyles} from '../../../../assets/globalStyles.styles';
import StarRating from '../../../../components/micro-components/StarRating/StarRating';
import DescriptionTypo from '../../../../components/micro-components/Typography/DescriptionTypo/DescriptionTypo';
import H2Typo from '../../../../components/micro-components/Typography/H2Typo/H2Typo';
import H4Typo from '../../../../components/micro-components/Typography/H4Typo/H4Typo';
import SmallTypo from '../../../../components/micro-components/Typography/SmallTypo/SmallTypo';
import {ISingleProductComment} from '../../../../types/IProductDetailed.type';
import H3Typo from '../../../../components/micro-components/Typography/H3Typo/H3Typo';
import CustomButton from '../../../../components/micro-components/Controls/CustomButton/CustomButton';

const CommentView: React.FC<{
  comments: ISingleProductComment[];
  seeAllClicked: () => void;
  onNewCommentButtonClicked: () => void;
}> = ({comments, seeAllClicked, onNewCommentButtonClicked}) => {
  return (
    <View style={styles.container}>
      {comments && comments.length ? (
        <>
          <View style={styles.headerContainer}>
            <H2Typo text="En Son Yorum" textStyle={{color: COLORS.mainGreen}} />
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
          <CustomButton
            onPress={onNewCommentButtonClicked}
            text="Yorum Yap"
            containerStyle={styles.newCommentButtonContainer}
            color={COLORS.mainGreen}
            textColor={COLORS.mainGreen}
            // eslint-disable-next-line react-native/no-inline-styles
            textStyle={{fontSize: 15}}
            outlined
          />
        </>
      ) : (
        <View style={styles.emptyResultContainer}>
          <Image
            source={{
              uri: 'https://www.ipsizcambaz.com/cdn/assets/images/logo.png',
            }}
            style={styles.logoImg}
          />
          <H3Typo
            text="Ürün Hakkında Yorum Bulunmamaktadır."
            textStyle={styles.emptyTextStyle}
          />
          <CustomButton
            onPress={onNewCommentButtonClicked}
            text="Yorum Yap"
            containerStyle={styles.newCommentButtonContainer}
            color={COLORS.mainGreen}
            textColor={COLORS.mainGreen}
            // eslint-disable-next-line react-native/no-inline-styles
            textStyle={{fontSize: 15}}
            outlined
          />
        </View>
      )}
    </View>
  );
};

export default CommentView;
