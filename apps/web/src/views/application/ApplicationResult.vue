<script setup lang="ts">
import { Card, Divider, Button } from 'primevue';
import habitatForHumanityLogo from '../../assets/images/logos/habitat_for_humanity.png';
import hopeBuildersLogo from '../../assets/images/logos/hopebuilders.png';
import jfsLogo from '../../assets/images/logos/jewish_family_services_of_kc.png';

const organizations = [
  { name: 'Habitat for Humanity', description: 'Every homeowner deserves to live in a safe and stable well-maintained home. Habitat’s Home Preservation program works alongside homeowners to make affordable home repairs that give new life to their home.', logo: habitatForHumanityLogo, email: 'contact@habitatkc.org', phone: '(816) 924-1096' },
  { name: 'HopeBuilders', description: 'Serving older adults and individuals living with disabilities by providing accessibility modifications and critical home repairs.', logo: hopeBuildersLogo, email: 'needhelp@hopebuilders-kc.org', phone: '888-467-3001' },
  { name: 'Jewish Family Services of KC', description: 'Provides high quality, dependable minor home repairs and access to services helping older adults maintain their independence at home. With Help@Home, individuals get the peace of mind they need to stay in control of their daily lives for as long as they choose to stay in their homes.', logo: jfsLogo, email: 'navigator@jfskc.org', phone: '913-730-1443' },
];
</script>

<template>
  <div class="application-result">
    <Card>
      <template #content>
        <h3>Thank you!</h3>

        <div>Thank you for submitting you're information. We have sent your information to the following services based on your needs. These organization should be in touch with soon. If you have not heard from someone in two weeks, you are welcome to reach out to them directly.</div>

        <Divider />

        <template v-for="organization of organizations">
          <div class="flex flex-row">
            <div class="flex mr-1">
              <img :src="organization.logo" class="organization-logo" />
            </div>
            <div>
              <h4>{{ organization.name }}</h4>
              <p>{{ organization.description }}</p>
              <div><b>Email:</b>{{ organization.email }}</div>
              <div><b>Phone:</b>{{ organization.phone }}</div>
            </div>
          </div>
          <Divider />
        </template>
      </template>
      
      <template #footer>
        <Button style="margin-right: 8px">Print</Button>
        <Button>Email me these details</Button>
      </template>
    </Card>
  </div>
</template>

<style scoped>
.application-result {
  max-width: 682px;
  margin: auto;
}

.organization-logo {
  max-width: 128px;
  max-height: 128px;

  margin: auto;
}
</style>