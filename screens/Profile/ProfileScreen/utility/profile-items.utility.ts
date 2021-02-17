type ProfileStackParamList =
  | 'my_profile_screen'
  | 'my_orders_screen'
  | 'my_notifications_screen'
  | 'my_addresses_screen'
  | 'my_invoice_addresses_screen'
  | 'cancel_or_return_claims_screen'
  | 'my_proposals_screen'
  | 'questions_and_answers_screen'
  | 'my_comments_screen'
  | 'my_favourites_screen'
  | 'my_coins_screen'
  | 'my_price_alarms_screen'
  | 'about_us_screen'
  | 'special_for_acrobats_screen'
  | 'contact_us_screen';

export type IProfileItem = {
  id: string;
  title: string;
  iconName: string;
  path: ProfileStackParamList | null;
  functionOnClick?: () => any;
  badgeCount: number | null;
};

export const getProfileRoutes: (
  badgeObj: {
    [key: string]: number;
  },
  callbackOnClickObj: {[key: string]: (() => any) | undefined},
) => IProfileItem[] = (badgeObj, callbackOnClickObj) => [
  {
    id: 'profile',
    title: 'Profil',
    iconName: 'user',
    badgeCount: badgeObj.profile ? badgeObj.profile : null,
    path: 'my_profile_screen',
  },
  {
    id: 'my_orders',
    title: 'Siparişlerim',
    iconName: 'box-check',
    badgeCount: badgeObj.my_orders ? badgeObj.my_orders : null,
    path: 'my_orders_screen',
  },
  {
    id: 'my_notifications',
    title: 'Bildirimlerim',
    iconName: 'bells',
    badgeCount: badgeObj.my_notifications ? badgeObj.my_notifications : null,
    path: 'my_notifications_screen',
  },
  {
    id: 'my_addresses',
    title: 'Gönderim Adreslerim',
    iconName: 'home',
    badgeCount: badgeObj.my_addresses ? badgeObj.my_addresses : null,
    path: 'my_addresses_screen',
  },
  {
    id: 'my_invoice_addresses',
    title: 'Fatura Adreslerim',
    iconName: 'home-alt',
    badgeCount: badgeObj.my_addresses ? badgeObj.my_addresses : null,
    path: 'my_invoice_addresses_screen',
  },
  {
    id: 'cancel_or_return_claims',
    title: 'İptal ve İade',
    iconName: 'exchange',
    badgeCount: badgeObj.cancel_or_return_claims
      ? badgeObj.cancel_or_return_claims
      : null,
    path: 'cancel_or_return_claims_screen',
  },
  {
    id: 'my_proposals',
    title: 'Teklif İsteklerim',
    iconName: 'book-open',
    badgeCount: badgeObj.my_proposals ? badgeObj.my_proposals : null,
    path: 'my_proposals_screen',
  },
  {
    id: 'questions_and_answers',
    title: 'Soru ve Cevaplar',
    iconName: 'question-square',
    badgeCount: badgeObj.questions_and_answers
      ? badgeObj.questions_and_answers
      : null,
    path: 'questions_and_answers_screen',
  },
  {
    id: 'my_comments',
    title: 'Yorumlarım',
    iconName: 'comment',
    badgeCount: badgeObj.my_comments ? badgeObj.my_comments : null,
    path: 'my_comments_screen',
  },
  {
    id: 'my_favourites',
    title: 'Favorilerim',
    iconName: 'stars',
    badgeCount: badgeObj.my_favourites ? badgeObj.my_favourites : null,
    path: 'my_favourites_screen',
  },
  {
    id: 'my_coins',
    title: 'Jetonlarım',
    iconName: 'coins',
    badgeCount: badgeObj.my_coins ? badgeObj.my_coins : null,
    path: 'my_coins_screen',
  },
  {
    id: 'my_price_alarms',
    title: 'Fiyat Alarmlarım',
    iconName: 'alarm-plus',
    badgeCount: badgeObj.my_price_alarms ? badgeObj.my_price_alarms : null,
    path: 'my_price_alarms_screen',
  },
  {
    id: 'about_us',
    title: 'Hakkımızda',
    iconName: 'info',
    badgeCount: badgeObj.about_us ? badgeObj.about_us : null,
    path: 'about_us_screen',
  },
  {
    id: 'special_for_acrobats',
    title: 'Cambazlara Özel',
    iconName: 'address-card',
    badgeCount: badgeObj.special_for_acrobats
      ? badgeObj.special_for_acrobats
      : null,
    path: 'special_for_acrobats_screen',
  },
  {
    id: 'contact_us',
    title: 'İletişim',
    iconName: 'id-card-alt',
    badgeCount: badgeObj.contact_us ? badgeObj.contact_us : null,
    path: 'contact_us_screen',
  },
  {
    id: 'log_out',
    title: 'Çıkış Yap',
    iconName: 'sign-out-alt',
    badgeCount: badgeObj.log_out ? badgeObj.log_out : null,
    path: null,
    functionOnClick: callbackOnClickObj.log_out
      ? callbackOnClickObj.log_out
      : undefined,
  },
];
