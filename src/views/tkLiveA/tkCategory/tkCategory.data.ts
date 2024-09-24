import { BasicColumn, FormSchema } from '@/components/Table';
import { useI18n } from '@/hooks/web/useI18n';
import { formatToDateTime } from '@/utils/dateUtil';

const { t } = useI18n();

export const columns: BasicColumn[] = [
  {
    title: t('tkLiveA.tkCategory.createId'),
    dataIndex: 'createId',
    width: 100,
  },
  {
    title: t('tkLiveA.tkCategory.departmentId'),
    dataIndex: 'departmentId',
    width: 100,
  },
  {
    title: t('tkLiveA.tkCategory.categoryType'),
    dataIndex: 'categoryType',
    width: 100,
  },
  {
    title: t('tkLiveA.tkCategory.categoryId'),
    dataIndex: 'categoryId',
    width: 100,
  },
  {
    title: t('tkLiveA.tkCategory.categoryDetails'),
    dataIndex: 'categoryDetails',
    width: 100,
  },
  {
    title: t('tkLiveA.tkCategory.categoryCounts'),
    dataIndex: 'categoryCounts',
    width: 100,
  },
  {
    title: t('tkLiveA.tkCategory.categoryUsed'),
    dataIndex: 'categoryUsed',
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
    label: t('tkLiveA.tkCategory.createId'),
    component: 'Input',
    colProps: { span: 8 },
  },
  {
    field: 'departmentId',
    label: t('tkLiveA.tkCategory.departmentId'),
    component: 'Input',
    colProps: { span: 8 },
  },
  {
    field: 'categoryDetails',
    label: t('tkLiveA.tkCategory.categoryDetails'),
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
    label: t('tkLiveA.tkCategory.createId'),
    component: 'Input',
    required: true,
  },
  {
    field: 'departmentId',
    label: t('tkLiveA.tkCategory.departmentId'),
    component: 'Input',
    required: true,
  },
  {
    field: 'categoryType',
    label: t('tkLiveA.tkCategory.categoryType'),
    component: 'InputNumber',
    required: true,
  },
  {
    field: 'categoryId',
    label: t('tkLiveA.tkCategory.categoryId'),
    component: 'InputNumber',
    required: true,
  },
  {
    field: 'categoryDetails',
    label: t('tkLiveA.tkCategory.categoryDetails'),
    component: 'Input',
    required: true,
  },
  {
    field: 'categoryCounts',
    label: t('tkLiveA.tkCategory.categoryCounts'),
    component: 'InputNumber',
    required: true,
  },
  {
    field: 'categoryUsed',
    label: t('tkLiveA.tkCategory.categoryUsed'),
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
];
