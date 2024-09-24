<template>
  <BasicDrawer
    v-bind="$attrs"
    @register="registerDrawer"
    showFooter
    :title="getTitle"
    width="35%"
    @ok="handleSubmit"
  >
    <BasicForm @register="registerForm" />
  </BasicDrawer>
</template>
<script lang="ts" setup>
  import { ref, computed, unref } from 'vue';
  import { BasicForm, useForm } from '@/components/Form/index';
  import { formSchema } from './tkCategory.data';
  import { BasicDrawer, useDrawerInner } from '@/components/Drawer';
  import { useI18n } from 'vue-i18n';

  import { createTkCategory, updateTkCategory } from '@/api/tkLiveA/tkCategory';

  const emit = defineEmits(['success', 'register']);
  const isUpdate = ref(true);
  const { t } = useI18n();

  const [registerForm, { resetFields, setFieldsValue, validate }] = useForm({
    labelWidth: 160,
    baseColProps: { span: 24 },
    layout: 'vertical',
    schemas: formSchema,
    showActionButtonGroup: false,
  });

  const [registerDrawer, { setDrawerProps, closeDrawer }] = useDrawerInner(async (data) => {
    await resetFields();
    setDrawerProps({ confirmLoading: false });

    isUpdate.value = !!data?.isUpdate;

    if (unref(isUpdate)) {
      await setFieldsValue({
        ...data.record,
      });
    }
  });

  const getTitle = computed(() =>
    !unref(isUpdate) ? t('tkLiveA.tkCategory.addTkCategory') : t('tkLiveA.tkCategory.editTkCategory'),
  );

  async function handleSubmit() {
    const values = await validate();
    setDrawerProps({ confirmLoading: true });
    values['id'] = unref(isUpdate) ? Number(values['id']) : 0;
    let result = unref(isUpdate) ? await updateTkCategory(values) : await createTkCategory(values);
    if (result.code === 0) {
      closeDrawer();
      emit('success');
    }
    setDrawerProps({ confirmLoading: false });
  }
</script>
