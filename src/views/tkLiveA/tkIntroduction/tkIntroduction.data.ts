import { BasicColumn, FormSchema } from '@/components/Table';
import { useI18n } from '@/hooks/web/useI18n';
import { formatToDateTime } from '@/utils/dateUtil';

const { t } = useI18n();

export const columns: BasicColumn[] = [
  {
    title: t('tkLiveA.tkIntroduction.createId'),
    dataIndex: 'createId',
    width: 100,
  },
  {
    title: t('tkLiveA.tkIntroduction.departmentId'),
    dataIndex: 'departmentId',
    width: 100,
  },
  {
    title: t('tkLiveA.tkIntroduction.introductionId'),
    dataIndex: 'introductionId',
    width: 100,
  },
  {
    title: t('tkLiveA.tkIntroduction.introductionDetails'),
    dataIndex: 'introductionDetails',
    width: 100,
  },
  {
    title: t('tkLiveA.tkIntroduction.categoryId'),
    dataIndex: 'categoryId',
    width: 100,
  },
  {
    title: t('tkLiveA.tkIntroduction.usedCount'),
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
    label: t('tkLiveA.tkIntroduction.createId'),
    component: 'Input',
    colProps: { span: 8 },
  },
  {
    field: 'departmentId',
    label: t('tkLiveA.tkIntroduction.departmentId'),
    component: 'Input',
    colProps: { span: 8 },
  },
  {
    field: 'introductionDetails',
    label: t('tkLiveA.tkIntroduction.introductionDetails'),
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
    label: t('tkLiveA.tkIntroduction.createId'),
    component: 'Input',
    required: true,
  },
  {
    field: 'departmentId',
    label: t('tkLiveA.tkIntroduction.departmentId'),
    component: 'Input',
    required: true,
  },
  {
    field: 'introductionId',
    label: t('tkLiveA.tkIntroduction.introductionId'),
    component: 'InputNumber',
    required: true,
  },
  {
    field: 'introductionDetails',
    label: t('tkLiveA.tkIntroduction.introductionDetails'),
    component: 'Input',
    required: true,
  },
  {
    field: 'categoryId',
    label: t('tkLiveA.tkIntroduction.categoryId'),
    component: 'InputNumber',
    required: true,
  },
  {
    field: 'usedCount',
    label: t('tkLiveA.tkIntroduction.usedCount'),
    component: 'InputNumber',
    required: true,
  },
];
