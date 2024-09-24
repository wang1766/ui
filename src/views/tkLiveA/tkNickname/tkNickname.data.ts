import { BasicColumn, FormSchema } from '@/components/Table';
import { useI18n } from '@/hooks/web/useI18n';
import { formatToDateTime } from '@/utils/dateUtil';

const { t } = useI18n();

export const columns: BasicColumn[] = [
  {
    title: t('tkLiveA.tkNickname.createId'),
    dataIndex: 'createId',
    width: 100,
  },
  {
    title: t('tkLiveA.tkNickname.departmentId'),
    dataIndex: 'departmentId',
    width: 100,
  },
  {
    title: t('tkLiveA.tkNickname.nicknameId'),
    dataIndex: 'nicknameId',
    width: 100,
  },
  {
    title: t('tkLiveA.tkNickname.nicknameDetails'),
    dataIndex: 'nicknameDetails',
    width: 100,
  },
  {
    title: t('tkLiveA.tkNickname.categoryId'),
    dataIndex: 'categoryId',
    width: 100,
  },
  {
    title: t('tkLiveA.tkNickname.usedCount'),
    dataIndex: 'usedCount',
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
    label: t('tkLiveA.tkNickname.createId'),
    component: 'Input',
    colProps: { span: 8 },
  },
  {
    field: 'departmentId',
    label: t('tkLiveA.tkNickname.departmentId'),
    component: 'Input',
    colProps: { span: 8 },
  },
  {
    field: 'nicknameDetails',
    label: t('tkLiveA.tkNickname.nicknameDetails'),
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
    label: t('tkLiveA.tkNickname.createId'),
    component: 'Input',
    required: true,
  },
  {
    field: 'departmentId',
    label: t('tkLiveA.tkNickname.departmentId'),
    component: 'Input',
    required: true,
  },
  {
    field: 'nicknameId',
    label: t('tkLiveA.tkNickname.nicknameId'),
    component: 'InputNumber',
    required: true,
  },
  {
    field: 'nicknameDetails',
    label: t('tkLiveA.tkNickname.nicknameDetails'),
    component: 'Input',
    required: true,
  },
  {
    field: 'categoryId',
    label: t('tkLiveA.tkNickname.categoryId'),
    component: 'InputNumber',
    required: true,
  },
  {
    field: 'usedCount',
    label: t('tkLiveA.tkNickname.usedCount'),
    component: 'InputNumber',
    required: true,
  },
];
