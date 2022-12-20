import cron from 'node-cron'

export function initScheduledJobs() {
  const scheduledJobFunction = cron.schedule('* * * * *', () => {
    console.log('Im executed on a schedule!')
    // Add your custom logic here
  })

  scheduledJobFunction.start()
}
