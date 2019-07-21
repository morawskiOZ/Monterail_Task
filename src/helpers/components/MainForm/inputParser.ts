export enum InputNames {
  TITLE = "title",
  EVENT_FEE = "event_fee",
  PAID_EVENT = "paid_event",
  DESCRIPTION = "description",
  CATEGORY_ID = "category_id",
  COORDINATOR_EMAIL = "coordinator.email",
  COORDINATOR_ID = "coordinator.id",
  DURATION = "duration"
}
export enum InputTypes {
  TEXT = "text",
  TEXT_AREA = "textarea",
  SELECT = "select",
  PAYMENT_GROUP = "paymentGroup",
  CONDITIONAL = "conditional"
}

export const parseInput = (value: any, name: InputNames | string) => {
  switch (name) {
    case InputNames.EVENT_FEE:
    case InputNames.CATEGORY_ID:
      return parseFloat(value)
    case InputNames.PAID_EVENT:
      return value === "true"
    case InputNames.DURATION:
      return parseFloat(value) * 60
    default:
      return value
  }
}
