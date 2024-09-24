import { BasicColumn, FormSchema } from '@/components/Table';
import { useI18n } from '@/hooks/web/useI18n';
import { formatToDateTime } from '@/utils/dateUtil';

const { t } = useI18n();

export const columns: BasicColumn[] = [
  {
    title: t('tkLiveA.tkAccountUser.createId'),
    dataIndex: 'createId',
    width: 100,
  },
  {
    title: t('tkLiveA.tkAccountUser.departmentId'),
    dataIndex: 'departmentId',
    width: 100,
  },
  {
    title: t('tkLiveA.tkAccountUser.accountUd'),
    dataIndex: 'accountUd',
    width: 100,
  },
  {
    title: t('tkLiveA.tkAccountUser.accountNickname'),
    dataIndex: 'accountNickname',
    width: 100,
  },
  {
    title: t('tkLiveA.tkAccountUser.categoryId'),
    dataIndex: 'categoryId',
    width: 100,
  },
  {
    title: t('tkLiveA.tkAccountUser.categoryDetails'),
    dataIndex: 'categoryDetails',
    width: 100,
  },
  {
    title: t('tkLiveA.tkAccountUser.accountMessageCount'),
    dataIndex: 'accountMessageCount',
    width: 100,
  },
  {
    title: t('tkLiveA.tkAccountUser.accountSuccessCount'),
    dataIndex: 'accountSuccessCount',
    width: 100,
  },
  {
    title: t('tkLiveA.tkAccountUser.accountJn'),
    dataIndex: 'accountJn',
    width: 100,
  },
  {
    title: t('tkLiveA.tkAccountUser.images'),
    dataIndex: 'images',
    width: 100,
  },
  {
    title: t('tkLiveA.tkAccountUser.accountIntroduction'),
    dataIndex: 'accountIntroduction',
    width: 100,
  },
  {
    title: t('tkLiveA.tkAccountUser.hasFollowedFun'),
    dataIndex: 'hasFollowedFun',
    width: 100,
  },
  {
    title: t('tkLiveA.tkAccountUser.hasGetFun'),
    dataIndex: 'hasGetFun',
    width: 100,
  },
  {
    title: t('tkLiveA.tkAccountUser.hasBeUsed'),
    dataIndex: 'hasBeUsed',
    width: 100,
  },
  {
    title: t('tkLiveA.tkAccountUser.maxFollowsCount'),
    dataIndex: 'maxFollowsCount',
    width: 100,
  },
  {
    title: t('tkLiveA.tkAccountUser.maxPrivateMessageCount'),
    dataIndex: 'maxPrivateMessageCount',
    width: 100,
  },
  {
    title: t('tkLiveA.tkAccountUser.accountSecud'),
    dataIndex: 'accountSecud',
    width: 100,
  },
  {
    title: t('tkLiveA.tkAccountUser.uniqueid'),
    dataIndex: 'uniqueid',
    width: 100,
  },
  {
    title: t('tkLiveA.tkAccountUser.shortid'),
    dataIndex: 'shortid',
    width: 100,
  },
  {
    title: t('tkLiveA.tkAccountUser.nickname'),
    dataIndex: 'nickname',
    width: 100,
  },
  {
    title: t('tkLiveA.tkAccountUser.dumperversion'),
    dataIndex: 'dumperversion',
    width: 100,
  },
  {
    title: t('tkLiveA.tkAccountUser.password'),
    dataIndex: 'password',
    width: 100,
  },
  {
    title: t('tkLiveA.tkAccountUser.appver'),
    dataIndex: 'appver',
    width: 100,
  },
  {
    title: t('tkLiveA.tkAccountUser.xtttoken'),
    dataIndex: 'xtttoken',
    width: 100,
  },
  {
    title: t('tkLiveA.tkAccountUser.cookiestr'),
    dataIndex: 'cookiestr',
    width: 100,
  },
  {
    title: t('tkLiveA.tkAccountUser.commonparams'),
    dataIndex: 'commonparams',
    width: 100,
  },
  {
    title: t('tkLiveA.tkAccountUser.signextra'),
    dataIndex: 'signextra',
    width: 100,
  },
  {
    title: t('tkLiveA.tkAccountUser.bundleid'),
    dataIndex: 'bundleid',
    width: 100,
  },
  {
    title: t('tkLiveA.tkAccountUser.timestamp'),
    dataIndex: 'timestamp',
    width: 100,
  },
  {
    title: t('common.createTime'),
    dataIndex: 'createdAt',
    width: 70,
    customRender: ({ record }) => {
      return formatToDateTime(record.createdAt);
    },
  },
];

export const searchFormSchema: FormSchema[] = [
  {
    field: 'createId',
    label: t('tkLiveA.tkAccountUser.createId'),
    component: 'Input',
    colProps: { span: 8 },
  },
  {
    field: 'departmentId',
    label: t('tkLiveA.tkAccountUser.departmentId'),
    component: 'Input',
    colProps: { span: 8 },
  },
  {
    field: 'accountUd',
    label: t('tkLiveA.tkAccountUser.accountUd'),
    component: 'Input',
    colProps: { span: 8 },
  },
];

export const formSchema: FormSchema[] = [
  {
    field: 'id',
    label: 'ID',
    component: 'Input',
    show: false,
  },
  {
    field: 'createId',
    label: t('tkLiveA.tkAccountUser.createId'),
    component: 'Input',
    required: true,
  },
  {
    field: 'departmentId',
    label: t('tkLiveA.tkAccountUser.departmentId'),
    component: 'Input',
    required: true,
  },
  {
    field: 'accountUd',
    label: t('tkLiveA.tkAccountUser.accountUd'),
    component: 'Input',
    required: true,
  },
  {
    field: 'accountNickname',
    label: t('tkLiveA.tkAccountUser.accountNickname'),
    component: 'Input',
    required: true,
  },
  {
    field: 'categoryId',
    label: t('tkLiveA.tkAccountUser.categoryId'),
    component: 'InputNumber',
    required: true,
  },
  {
    field: 'categoryDetails',
    label: t('tkLiveA.tkAccountUser.categoryDetails'),
    component: 'Input',
    required: true,
  },
  {
    field: 'accountMessageCount',
    label: t('tkLiveA.tkAccountUser.accountMessageCount'),
    component: 'InputNumber',
    required: true,
  },
  {
    field: 'accountSuccessCount',
    label: t('tkLiveA.tkAccountUser.accountSuccessCount'),
    component: 'InputNumber',
    required: true,
  },
  {
    field: 'accountJn',
    label: t('tkLiveA.tkAccountUser.accountJn'),
    component: 'Input',
    required: true,
  },
  {
    field: 'images',
    label: t('tkLiveA.tkAccountUser.images'),
    component: 'Input',
    required: true,
  },
  {
    field: 'accountIntroduction',
    label: t('tkLiveA.tkAccountUser.accountIntroduction'),
    component: 'Input',
    required: true,
  },
  {
    field: 'hasFollowedFun',
    label: t('tkLiveA.tkAccountUser.hasFollowedFun'),
    component: 'RadioButtonGroup',
    defaultValue: true,
    componentProps: {
      options: [
        { label: t('common.on'), value: true },
        { label: t('common.off'), value: false },
      ],
    },
    required: true,
  },
  {
    field: 'hasGetFun',
    label: t('tkLiveA.tkAccountUser.hasGetFun'),
    component: 'RadioButtonGroup',
    defaultValue: true,
    componentProps: {
      options: [
        { label: t('common.on'), value: true },
        { label: t('common.off'), value: false },
      ],
    },
    required: true,
  },
  {
    field: 'hasBeUsed',
    label: t('tkLiveA.tkAccountUser.hasBeUsed'),
    component: 'RadioButtonGroup',
    defaultValue: true,
    componentProps: {
      options: [
        { label: t('common.on'), value: true },
        { label: t('common.off'), value: false },
      ],
    },
    required: true,
  },
  {
    field: 'maxFollowsCount',
    label: t('tkLiveA.tkAccountUser.maxFollowsCount'),
    component: 'InputNumber',
    required: true,
  },
  {
    field: 'maxPrivateMessageCount',
    label: t('tkLiveA.tkAccountUser.maxPrivateMessageCount'),
    component: 'InputNumber',
    required: true,
  },
  {
    field: 'accountSecud',
    label: t('tkLiveA.tkAccountUser.accountSecud'),
    component: 'Input',
    required: true,
  },
  {
    field: 'uniqueid',
    label: t('tkLiveA.tkAccountUser.uniqueid'),
    component: 'Input',
    required: true,
  },
  {
    field: 'shortid',
    label: t('tkLiveA.tkAccountUser.shortid'),
    component: 'Input',
    required: true,
  },
  {
    field: 'nickname',
    label: t('tkLiveA.tkAccountUser.nickname'),
    component: 'Input',
    required: true,
  },
  {
    field: 'dumperversion',
    label: t('tkLiveA.tkAccountUser.dumperversion'),
    component: 'Input',
    required: true,
  },
  {
    field: 'password',
    label: t('tkLiveA.tkAccountUser.password'),
    component: 'Input',
    required: true,
  },
  {
    field: 'appver',
    label: t('tkLiveA.tkAccountUser.appver'),
    component: 'Input',
    required: true,
  },
  {
    field: 'xtttoken',
    label: t('tkLiveA.tkAccountUser.xtttoken'),
    component: 'Input',
    required: true,
  },
  {
    field: 'cookiestr',
    label: t('tkLiveA.tkAccountUser.cookiestr'),
    component: 'Input',
    required: true,
  },
  {
    field: 'commonparams',
    label: t('tkLiveA.tkAccountUser.commonparams'),
    component: 'Input',
    required: true,
  },
  {
    field: 'signextra',
    label: t('tkLiveA.tkAccountUser.signextra'),
    component: 'Input',
    required: true,
  },
  {
    field: 'bundleid',
    label: t('tkLiveA.tkAccountUser.bundleid'),
    component: 'Input',
    required: true,
  },
  {
    field: 'timestamp',
    label: t('tkLiveA.tkAccountUser.timestamp'),
    component: 'InputNumber',
    required: true,
  },
];
