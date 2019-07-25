export interface FormValues {
  title: string,
  description: string
  date: string
  coordinator: {
    email?: string
    id: string
  }
  event_fee?: number
  paid_event?: boolean
  category_id?: string
  duration?: number
  reward?: number
}