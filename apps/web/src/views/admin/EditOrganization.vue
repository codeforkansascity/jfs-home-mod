<script lang="ts" setup>
import { FloatLabel, InputText, Textarea, Divider, ToggleSwitch } from 'primevue';
import { reactive } from 'vue';

const model = reactive({ 
  name: 'HopeBuilders', 
  description: 'Serving older adults and individuals living with disabilities by providing accessibility modifications and critical home repairs.', 
  email: 'needhelp@hopebuilders-kc.org', 
  phone: '888-467-3001',
  address: {
    street: '',
    line2: '',
    city: '',
    state: '',
    zip: ''
  },
  exclusions: {
    serviceArea: false,
    demographics: false,
    homeonwership: false,
    income: false,
    householdNumber: false,
  }
});

</script>

<template>
  <div>
    <h2>Edit Organization</h2>
    <Divider />
    <h3>Public Profile</h3>
    <div>
      <FloatLabel variant="in">
        <InputText v-model="model.name" />
        <label>Name</label>
      </FloatLabel>
    </div>
    <div>
      <FloatLabel variant="in">
        <InputText v-model="model.email" />
        <label>Email</label>
      </FloatLabel>
    </div>
    <div>
      <FloatLabel variant="in">
        <InputText v-model="model.phone" />
        <label>Phone</label>
      </FloatLabel>
    </div>
    <h4>Organization Mission</h4>
    <Textarea v-model="model.description" />
    <h4>Address</h4>
    <div class="flex flex-row mb-1">
      <FloatLabel variant="in" class="flex-1">
        <InputText id="street" v-model="model.address.street" />
        <label for="street">Street Address</label>
      </FloatLabel>
    </div>
    <div class="flex flex-row mb-1">
      <FloatLabel variant="in" class="flex-1">
        <label for="line2">Address Line 2</label>
        <InputText id="line2" v-model="model.address.line2" />
      </FloatLabel>
    </div>
    <div class="flex flex-row mb-1">
      <FloatLabel variant="in" class="flex-1">
        <label for="city">City</label>
        <InputText id="city" v-model="model.address.city" />
      </FloatLabel>
      <FloatLabel variant="in" class="flex-1">
        <label for="state">State</label>
        <InputText id="state" v-model="model.address.state" />
      </FloatLabel>
      <FloatLabel variant="in" class="flex-1">
        <label for="zip">Zipcode</label>
        <InputText id="zip" v-model="model.address.zip" />
      </FloatLabel>
    </div>
    <Divider />
    <h3>Exclusion Criteria</h3>
    <div>
      <div class="flex flex-column" style="margin-bottom: 16px;">
        <div class="flex" style="margin-bottom: 4px;">
          <ToggleSwitch v-model="model.exclusions.serviceArea" style="margin-right: 4px;" />
          <label style="margin-top: auto; margin-bottom: auto;">Service Area</label>
        </div>
        <InputText />
      </div>
      <div class="flex flex-column" style="margin-bottom: 16px;">
        <div class="flex" style="margin-bottom: 4px;">
          <ToggleSwitch v-model="model.exclusions.demographics" style="margin-right: 4px;" />
          <label style="margin-top: auto; margin-bottom: auto;">Demographics</label>
        </div>
        <InputText />
      </div>
      <div class="flex flex-column" style="margin-bottom: 16px;">
        <div class="flex" style="margin-bottom: 4px;">
          <ToggleSwitch v-model="model.exclusions.homeonwership" style="margin-right: 4px;" />
          <label style="margin-top: auto; margin-bottom: auto;">Home ownership</label>
        </div>
        <InputText />
      </div>
      <div class="flex flex-column" style="margin-bottom: 16px;">
        <div class="flex" style="margin-bottom: 4px;">
          <ToggleSwitch v-model="model.exclusions.income" style="margin-right: 4px;" />
          <label style="margin-top: auto; margin-bottom: auto;">Income Level</label>
        </div>
        <InputText />
      </div>
      <div class="flex flex-column" style="margin-bottom: 16px;">
        <div class="flex" style="margin-bottom: 4px;">
          <ToggleSwitch v-model="model.exclusions.householdNumber" style="margin-right: 4px;" />
          <label style="margin-top: auto; margin-bottom: auto;">Household Number</label>
        </div>
        <InputText />
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>