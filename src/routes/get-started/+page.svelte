<script lang="ts">
  import Button from "$lib/components/Button.svelte"
  import Card from "./Card.svelte"
  import MailIcon from "$lib/images/mail-icon.svg?component"
  import SlackIcon from "$lib/images/slack-icon.svg?component"
</script>

<div>
  <div class="hero-section">
    <h1>Get started with IOXIO.io</h1>
    <div>
      Learn how to share, consume and collaborate with data. Explore data sources, sign up, and get
      your data moving!
    </div>
  </div>

  <div class="cards">
    <Card
      title="Create an account"
      index="1"
      action={{ title: "Create an account", href: "/signup" }}
    >
      <p>
        Creating an account is free and fast. You can create a new account on the fly if you don’t
        already have one. Please input all the required details and you will be logged in to the
        service as a new user. Remember the email address you used to sign up to the system, as you
        will need it when joining a group, or requesting a new group for your organization on the
        next step.
      </p>
    </Card>
    <Card title="Get a group" index="2" action={{ title: "Contact support", href: "/signup" }}>
      <p>
        At the core of access control on IOXIO.io are groups. Every data source belongs to a group,
        and groups request access to consume data from data sources controlled by other groups.
      </p>
      <p>
        Each user can join an organization's existing group or request a new group. For IOXIO.io
        these groups can be requested via email or through our community Slack. For fastest
        verification of your group, please send an email to support@ioxio.com and tell us the name
        of the group you would like to be created for you.
      </p>
    </Card>
    <Card title="Start sharing data" index="3" action={{ title: "Share data", href: "/signup" }}>
      <p>Data sharing is free, and you can share your data as soon as you have a group set up.</p>
      <p>
        Once you have an API that follows one of the existing data definitions on IOXIO.io you can
        start sharing your data! Check out the available data definitions from the definition
        viewer. If you can't find a definition that covers your use-case, please contact us at
        support@ioxio.com or through our community Slack and describe your usecase, so we can solve
        the problem together.
      </p>
      <p>
        Once you have created the API, you can log in to the Dataspace to publish your data source.
      </p>
    </Card>
    <Card title="Start consuming data" index="4" action={{ title: "Find data", href: "/signup" }}>
      <p>
        To consume data from other groups, you will need to upgrade your subscription. To get a
        quote, please contact us at sales@ioxio.com.
      </p>
      <p>
        You can find the available data sources in the discover data sources section. You can check
        the tecnical contact email from the data source listing. Remember to include in the email
        your group's name and which data source you want access to. Once you have been granted
        access, you can use the access control keys section to generate API tokens. We also have
        guides for consuming data to help you get started.
      </p>
    </Card>
  </div>
  <div class="footer-cards">
    <div class="card">
      <div>
        <h2>Get your data together</h2>
        <p>
          Whether you need to understand how data can be more widely shared or create value for your
          company, suppliers or customers, we help you make the most of data and upgrade your data
          sharing capabilities. We'll walk through the basics of our platform and common use cases
          and then dive into the things you need to know to get started.
        </p>
      </div>
      <Button url="/signup" icon={MailIcon}>Get quote</Button>
    </div>
    <div class="card">
      <div>
        <h2>Community</h2>
        <p>
          Join the conversation in our community Slack! Connect directly with our developers, share
          insights, and collaborate on your data-sharing solutions. It’s the perfect place to ask
          questions, spark discussions, and be part of a growing network of like-minded
          professionals.
        </p>
      </div>
      <Button url="/signup" icon={SlackIcon}>Slack</Button>
    </div>
  </div>
</div>

<style lang="scss">
  @use "$styles/setup" as *;
  .cards {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 5rem;
    margin: 4rem 0;

    @include mobile {
      grid-template-columns: 1fr;
    }
  }

  .footer-cards {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2.25rem;

    @include mobile {
      grid-template-columns: 1fr;
      gap: 2rem;
    }

    .card {
      background-color: $color-primary-dark-hover;
      padding: 1.5rem;
      border-radius: 0.5rem;
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      h2 {
        margin-top: 0;
      }
    }
  }
</style>
