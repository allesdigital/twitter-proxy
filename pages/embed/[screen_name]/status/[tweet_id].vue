<template>
  <div class="card" style="max-width: 550px">
    <div class="card-image">
      <figure class="image is-4by3">
        <img :src="clean(tweet.photos[0].url)" alt="" />
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-left">
          <figure class="image is-48x48">
            <img
              :src="clean(tweet.user.profile_image_url_https)"
              class="is-rounded"
              alt=""
            />
          </figure>
        </div>
        <div class="media-content">
          <p class="title is-4">{{ tweet.user.name }}</p>
          <p class="subtitle is-6">@{{ tweet.user.screen_name }}</p>
        </div>
      </div>

      <div class="content">
        <p>{{ tweet.text }}</p>
        <p>
          ♥ {{ tweet.favorite_count }}
          ·
          <time :datetime="tweet.created_at">{{ tweet.created_at }}</time>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
const route = useRoute();

const { data: tweet } = await useFetch(
  `https://cdn.syndication.twimg.com/tweet-result?features=tfw_timeline_list%3A%3Btfw_follower_count_sunset%3Atrue%3Btfw_tweet_edit_backend%3Aon%3Btfw_refsrc_session%3Aon%3Btfw_show_business_verified_badge%3Aon%3Btfw_mixed_media_15897%3Atreatment%3Btfw_experiments_cookie_expiration%3A1209600%3Btfw_duplicate_scribes_to_settings%3Aon%3Btfw_video_hls_dynamic_manifests_15082%3Atrue_bitrate%3Btfw_show_blue_verified_badge%3Aon%3Btfw_legacy_timeline_sunset%3Atrue%3Btfw_show_gov_verified_badge%3Aon%3Btfw_show_business_affiliate_badge%3Aon%3Btfw_tweet_edit_frontend%3Aon&lang=en&id=` +
    route.params.tweet_id
);

const clean = (url) => {
  const local = new URL(url);
  return local.pathname + local.search;
};
</script>
