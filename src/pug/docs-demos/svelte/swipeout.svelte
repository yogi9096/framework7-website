<App>
  <View main>
    <Page>
      <Navbar title="Swipeout"></Navbar>

      <Block>
        <p>
          Swipe out actions on list elements is one of the most awesome F7 features. It allows you to call hidden menu for each list element where you can put default ready-to use delete button or any other buttons for some required actions.
        </p>
      </Block>

      <BlockTitle>Swipe to delete with confirm modal</BlockTitle>
      <List>
        <ListItem
          swipeout
          title="Swipe left on me please">

          <SwipeoutActions right>
            <SwipeoutButton delete confirmText="Are you sure you want to delete this item?">Delete</SwipeoutButton>
          </SwipeoutActions>
        </ListItem>
        <ListItem
          swipeout
          title="Swipe left on me too">

          <SwipeoutActions right>
            <SwipeoutButton delete confirmText="Are you sure you want to delete this item?">Delete</SwipeoutButton>
          </SwipeoutActions>
        </ListItem>
        <ListItem
          title="I am not removable">

        </ListItem>
      </List>

      <BlockTitle>Swipe to delete without confirm</BlockTitle>
      <List>
        <ListItem
          swipeout
          title="Swipe left on me please">

          <SwipeoutActions right>
            <SwipeoutButton delete>Delete</SwipeoutButton>
          </SwipeoutActions>
        </ListItem>
        <ListItem
          swipeout
          title="Swipe left on me too">

          <SwipeoutActions right>
            <SwipeoutButton delete>Delete</SwipeoutButton>
          </SwipeoutActions>
        </ListItem>
        <ListItem
          title="I am not removable">

        </ListItem>
      </List>

      <BlockTitle>Swipe for actions</BlockTitle>
      <List>
        <ListItem
          swipeout
          title="Swipe left on me please">

          <SwipeoutActions right>
            <SwipeoutButton onClick={more}>More</SwipeoutButton>
            <SwipeoutButton delete>Delete</SwipeoutButton>
          </SwipeoutActions>
        </ListItem>
        <ListItem
          swipeout
          title="Swipe left on me too">

          <SwipeoutActions right>
            <SwipeoutButton onClick={more}>More</SwipeoutButton>
            <SwipeoutButton delete>Delete</SwipeoutButton>
          </SwipeoutActions>
        </ListItem>
        <ListItem
          swipeout
          title="You can't delete me">

          <SwipeoutActions right>
            <SwipeoutButton onClick={more}>More</SwipeoutButton>
          </SwipeoutActions>
        </ListItem>
      </List>

      <BlockTitle>With callback on remove</BlockTitle>
      <List>
        <ListItem
          swipeout
          onSwipeoutDeleted={onDeleted}
          title="Swipe left on me please">

          <SwipeoutActions right>
            <SwipeoutButton delete>Delete</SwipeoutButton>
          </SwipeoutActions>
        </ListItem>
        <ListItem
          swipeout
          onSwipeoutDeleted={onDeleted}
          title="Swipe left on me too">

          <SwipeoutActions right>
            <SwipeoutButton delete>Delete</SwipeoutButton>
          </SwipeoutActions>
        </ListItem>
        <ListItem
          title="I am not removable">

        </ListItem>
      </List>

      <BlockTitle>With actions on left side (swipe to right)</BlockTitle>
      <List>
        <ListItem
          swipeout
          title="Swipe right on me please">

          <SwipeoutActions left>
            <SwipeoutButton color="green" onClick={reply}>Reply</SwipeoutButton>
            <SwipeoutButton color="blue" onClick={forward}>Forward</SwipeoutButton>
          </SwipeoutActions>
        </ListItem>
        <ListItem
          swipeout
          title="Swipe right on me too">

          <SwipeoutActions left>
            <SwipeoutButton color="green" onClick={reply}>Reply</SwipeoutButton>
            <SwipeoutButton color="blue" onClick={forward}>Forward</SwipeoutButton>
          </SwipeoutActions>
        </ListItem>
      </List>

      <BlockTitle>On both sides with overswipes</BlockTitle>
      <List mediaList>
        <ListItem
          swipeout
          title="Facebook"
          after="17:14"
          subtitle="New messages from John Doe"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit amet, pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In vel dui laoreet, commodo augue id, pulvinar lacus."
        >
          <SwipeoutActions left>
            <SwipeoutButton overswipe color="green" onClick={reply}>Reply</SwipeoutButton>
            <SwipeoutButton color="blue" onClick={forward}>Forward</SwipeoutButton>
          </SwipeoutActions>
          <SwipeoutActions right>
            <SwipeoutButton onClick={more}>More</SwipeoutButton>
            <SwipeoutButton color="orange" onClick={mark}>Mark</SwipeoutButton>
            <SwipeoutButton delete overswipe confirmText="Are you sure you want to delete this item?">Delete</SwipeoutButton>
          </SwipeoutActions>
        </ListItem>
        <ListItem
          swipeout
          title="John Doe (via Twitter)"
          after="17:11"
          subtitle="John Doe (@_johndoe) mentioned you on Twitter!"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit amet, pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In vel dui laoreet, commodo augue id, pulvinar lacus."
        >
          <SwipeoutActions left>
            <SwipeoutButton overswipe color="green" onClick={reply}>Reply</SwipeoutButton>
            <SwipeoutButton color="blue" onClick={forward}>Forward</SwipeoutButton>
          </SwipeoutActions>
          <SwipeoutActions right>
            <SwipeoutButton onClick={more}>More</SwipeoutButton>
            <SwipeoutButton color="orange" onClick={mark}>Mark</SwipeoutButton>
            <SwipeoutButton delete overswipe confirmText="Are you sure you want to delete this item?">Delete</SwipeoutButton>
          </SwipeoutActions>
        </ListItem>
        <ListItem
          swipeout
          title="Facebook"
          after="16:48"
          subtitle="New messages from John Doe"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit amet, pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In vel dui laoreet, commodo augue id, pulvinar lacus."
        >
          <SwipeoutActions left>
            <SwipeoutButton overswipe color="green" onClick={reply}>Reply</SwipeoutButton>
            <SwipeoutButton color="blue" onClick={forward}>Forward</SwipeoutButton>
          </SwipeoutActions>
          <SwipeoutActions right>
            <SwipeoutButton onClick={more}>More</SwipeoutButton>
            <SwipeoutButton color="orange" onClick={mark}>Mark</SwipeoutButton>
            <SwipeoutButton delete overswipe confirmText="Are you sure you want to delete this item?">Delete</SwipeoutButton>
          </SwipeoutActions>
        </ListItem>
        <ListItem
          swipeout
          title="John Doe (via Twitter)"
          after="15:32"
          subtitle="John Doe (@_johndoe) mentioned you on Twitter!"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit amet, pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In vel dui laoreet, commodo augue id, pulvinar lacus."
        >
          <SwipeoutActions left>
            <SwipeoutButton overswipe color="green" onClick={reply}>Reply</SwipeoutButton>
            <SwipeoutButton color="blue" onClick={forward}>Forward</SwipeoutButton>
          </SwipeoutActions>
          <SwipeoutActions right>
            <SwipeoutButton onClick={more}>More</SwipeoutButton>
            <SwipeoutButton color="orange" onClick={mark}>Mark</SwipeoutButton>
            <SwipeoutButton delete overswipe confirmText="Are you sure you want to delete this item?">Delete</SwipeoutButton>
          </SwipeoutActions>
        </ListItem>
      </List>
    </Page>
  </View>
</App>
<script>
  import { onMount, onDestroy } from 'svelte';
  import {f7, App, View, Page, Navbar, Block, BlockTitle, List, ListItem, SwipeoutActions, SwipeoutButton} from 'framework7-svelte';

  let actions;

  function more() {
    actions.open();
  }
  function mark() {
    f7.dialog.alert('Mark');
  }
  function reply() {
    f7.dialog.alert('Reply');
  }
  function forward() {
    f7.dialog.alert('Forward');
  }
  function onDeleted() {
    f7.dialog.alert('Thanks, item removed!');
  }

  onMount(() => {
    actions = f7.actions.create({
      buttons: [
        [
          {
            text: 'Here comes some optional description or warning for actions below',
            label: true,
          },
          {
            text: 'Action 1',
          },
          {
            text: 'Action 2',
          },
        ],
        [
          {
            text: 'Cancel',
            bold: true,
          },
        ],
      ],
    });
  });

  onDestroy(() => {
    actions.destroy();
  });
</script>
