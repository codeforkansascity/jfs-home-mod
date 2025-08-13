<script setup lang="ts">
import { DataTable, Column } from 'primevue';
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
  <div>
    <h2>Manage Members</h2>
    <DataTable :value="organizations">
      <Column field="name" header="Name" />
    </DataTable>
  </div>
</template>

<style scoped></style>