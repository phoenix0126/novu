import { Control, Controller, useFormContext } from 'react-hook-form';
import { LackIntegrationError } from './LackIntegrationError';
import { IForm } from './use-template-controller.hook';
import { Textarea } from '../../design-system';
import { useEnvController } from '../../store/use-env-controller';
import { VariableManager } from './VariableManager';

export function TemplatePushEditor({
  control,
  index,
  isIntegrationActive,
}: {
  control: Control<IForm>;
  index: number;
  errors: any;
  isIntegrationActive: boolean;
}) {
  const { readonly } = useEnvController();
  const {
    formState: { errors },
  } = useFormContext();

  return (
    <>
      {!isIntegrationActive ? <LackIntegrationError channelType="Push" /> : null}
      <Controller
        name={`steps.${index}.template.title` as any}
        control={control}
        render={({ field }) => (
          <Textarea
            {...field}
            data-test-id="pushNotificationTitle"
            error={errors?.steps ? errors.steps[index]?.template?.content?.message : undefined}
            disabled={readonly}
            minRows={4}
            value={field.value || ''}
            label="Push message title"
            placeholder="Add notification title here..."
          />
        )}
      />
      <Controller
        name={`steps.${index}.template.content` as any}
        control={control}
        render={({ field }) => (
          <Textarea
            {...field}
            data-test-id="pushNotificationContent"
            error={errors?.steps ? errors.steps[index]?.template?.title?.message : undefined}
            disabled={readonly}
            minRows={4}
            value={field.value || ''}
            label="Push message content"
            placeholder="Add notification content here..."
          />
        )}
      />
      <VariableManager index={index} contents={['content', 'title']} />
    </>
  );
}
