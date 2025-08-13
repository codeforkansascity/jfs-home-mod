<script lang="ts" setup>
import { reactive, ref } from 'vue';
import { Dialog, InputText, Divider, InputNumber, Calendar, Dropdown, Button, Card, FloatLabel, Textarea } from 'primevue';
import { RouteNames } from '../../router';
import { useRouter } from 'vue-router';

const router = useRouter();

const form = reactive({
  firstName: '',
  lastName: '',
  householdCount: 1,
  householdMembers: [{ name: '', dob: null }],
  phone: '',
  email: '',
  address: {
    street: '',
    line2: '',
    city: '',
    state: '',
    zip: ''
  },
  homeOwnership: '',
  annualIncome: null
})

function updateHouseholdMembers() {
  const count = form.householdCount
  const current = form.householdMembers.length
  if (count > current) {
    for (let i = current; i < count; i++) {
      form.householdMembers.push({ name: '', dob: null })
    }
  } else if (count < current) {
    form.householdMembers.splice(count)
  }
}

const showConfirmation = ref(false);

function submitForm() {
  console.log('Form submitted:', JSON.parse(JSON.stringify(form)))
  showConfirmation.value = true;
}

function onConfirm() {
  router.push({ name: RouteNames.Application.ApplicationResult });
}
</script>

<template>
  <div class="applicant-form">
    <Card>
      <template #content>
        <h2>Home Modification Coalition of KC Application</h2>
        <div class="mb-1">
          <p>
            Thank you for inquiring about home repair services provided by the Home Modification Coalition of KC and
            Community Development. In an effort to provide you with improved services, we participate in the Orange
            County
            Home Preservation Coalition, which includes the following organizations: Orange County Housing Department,
            UNC Community Practice Lab, Orange County Department on Aging, Preserving Home, Habitat for Humanity of
            Orange County, The Marian C. Jackson Center, Hope Renovations, Central Pines Regional Council, The Town of
            Carrboro, The Town of Chapel Hill and other future partners participating in the Coalition.
          </p>
          <p>
            Together, we seek to make sustainable impacts on preserving and revitalizing homes and communities through
            necessary accessibility modifications and weatherization assistance. We support homeowners in remaining in
            their
            homes. When homeowners are unable to make repairs themselves, we help coordinate services when disrepair of
            a home imposes discomfort, the environment of a home is unsafe, or the home presents a health hazard.
          </p>
        </div>
        <Divider />
        <h3>Contact Information</h3>
        <div class="flex flex-row mb-1">
          <FloatLabel variant="in" class="flex-1">
            <InputText id="firstName" v-model="form.firstName" />
            <label for="firstName">First Name</label>
          </FloatLabel>
          <FloatLabel variant="in" class="flex-1">
            <InputText id="lastName" v-model="form.lastName" />
            <label for="listName">Last Name</label>
          </FloatLabel>
        </div>
        <div class="flex flex-row">
          <FloatLabel variant="in" class="flex-1">
            <InputText id="phone" v-model="form.phone" />
            <label for="phone">Phone</label>
          </FloatLabel>
          <FloatLabel variant="in" class="flex-1">
            <InputText id="email" v-model="form.email" />
            <label for="email">Email</label>
          </FloatLabel>
        </div>
        <Divider />
        <div class="flex flex-column mb-1">
          <div class="mb-1">
            What repairs or modifications are needed on your home?
          </div>
          <Textarea />
        </div>
        <Divider />
        <h3>Household Information</h3>
        <div class="flex flex-1 mb-1">
          <label for="ownership">Home Ownership</label>
          <Dropdown id="ownership" v-model="form.homeOwnership" :options="['Rent', 'Own']" placeholder="Select one" />
        </div>
        <div class="flex flex-1 mb-1">
          <label for="income">Annual Income</label>
          <InputNumber inputId="income" v-model="form.annualIncome" mode="currency" currency="USD" locale="en-US" />
        </div>
        <div class="flex flex-row mb-1">
          <FloatLabel variant="in">
            <InputNumber inputId="householdCount" v-model="form.householdCount" :min="1"
              @input="updateHouseholdMembers" />
            <label for="householdCount">Household</label>
          </FloatLabel>
        </div>
        <div v-for="(member, index) in form.householdMembers" :key="index" class="flex flex-row mb-1">
          <FloatLabel variant="in" class="flex-1">
            <InputText :id="'memberName-' + index" v-model="member.name" />
            <label :for="'memberName-' + index">Name</label>
          </FloatLabel>
          <FloatLabel variant="in" class="flex-1">
            <Calendar :id="'memberDob-' + index" v-model="member.dob" dateFormat="mm/dd/yy" showIcon />
            <label :for="'memberDob-' + index">DOB</label>
          </FloatLabel>
        </div>
        <Divider />
        <h3>Address</h3>
        <div class="flex flex-row mb-1">
          <FloatLabel variant="in" class="flex-1">
            <InputText id="street" v-model="form.address.street" />
            <label for="street">Street Address</label>
          </FloatLabel>
        </div>
        <div class="flex flex-row mb-1">
          <FloatLabel variant="in" class="flex-1">
            <label for="line2">Address Line 2</label>
            <InputText id="line2" v-model="form.address.line2" />
          </FloatLabel>
        </div>
        <div class="flex flex-row mb-1">
          <FloatLabel variant="in" class="flex-1">
            <label for="city">City</label>
            <InputText id="city" v-model="form.address.city" />
          </FloatLabel>
          <FloatLabel variant="in" class="flex-1">
            <label for="state">State</label>
            <InputText id="state" v-model="form.address.state" />
          </FloatLabel>
          <FloatLabel variant="in" class="flex-1">
            <label for="zip">Zipcode</label>
            <InputText id="zip" v-model="form.address.zip" />
          </FloatLabel>
        </div>
        <Divider />
      </template>
      <template #footer>
        <Button label="Submit" class="mt-3" @click="submitForm" />
      </template>
    </Card>
    <Dialog v-model:visible="showConfirmation" modal header="Confirm Submission" style="max-width: 512px;">
      <p>
        By filling out and signing this form, you are agreeing to submit an application to the Orange County Department
        of
        Housing and Community Development, but also allowing us to share the information you provide with all
        organizations within the Home Modification Coalition of KC Application so that we can work together to better serve
        you! If you meet the initial criteria, staff from Rebuilding Together of the Triangle will contact you by
        telephone to
        set up a home visit to assess the requested repairs to evaluate whether or not your home is a a good fit for one
        or
        more of the organizations’ programs.
      </p>
      <Button @click="onConfirm">
        I Agree
      </Button>
    </Dialog>
  </div>
</template>

<style scoped>
.applicant-form {
  max-width: 682px;
  margin: auto;
}
</style>

<style>
.p-floatlabel .p-inputtext,
.p-floatlabel .p-inputnumber {
  width: 100%;
}
</style>
