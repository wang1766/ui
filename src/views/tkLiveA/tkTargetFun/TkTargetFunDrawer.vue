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
  import { formSchema } from './tkTargetFun.data';
  import { BasicDrawer, useDrawerInner } from '@/components/Drawer';
  import { useI18n } from 'vue-i18n';

  import { createTkTargetFun, updateTkTargetFun } from '@/api/tkLiveA/tkTargetFun';

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
    !unref(isUpdate) ? t('tkLiveA.tkTargetFun.addTkTargetFun') : t('tkLiveA.tkTargetFun.editTkTargetFun'),
  );

  async function handleSubmit() {
    const values = await validate();
    setDrawerProps({ confirmLoading: true });
    values['id'] = unref(isUpdate) ? Number(values['id']) : 0;
    let result = unref(isUpdate) ? await updateTkTargetFun(values) : await createTkTargetFun(values);
    if (result.code === 0) {
      closeDrawer();
      emit('success');
    }
    setDrawerProps({ confirmLoading: false });
  }
</script>
