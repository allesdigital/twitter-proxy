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
  "https://cdn.syndication.twimg.com/tweet-result" +
    "?features=" +
    [
      "tfw_timeline_list:",
      "tfw_follower_count_sunset:true",
      "tfw_tweet_edit_backend:on",
      "tfw_refsrc_session:on",
      "tfw_show_business_verified_badge:on",
      "tfw_mixed_media_15897:treatment",
      "tfw_experiments_cookie_expiration:1209600",
      "tfw_duplicate_scribes_to_settings:on",
      "tfw_video_hls_dynamic_manifests_15082:true_bitrate",
      "tfw_show_blue_verified_badge:on",
      "tfw_legacy_timeline_sunset:true",
      "tfw_show_gov_verified_badge:on",
      "tfw_show_business_affiliate_badge:on",
      "tfw_tweet_edit_frontend:on",
    ].join(";") +
    "&lang=en" +
    "&id=" +
    route.params.tweet_id
);

const clean = (url) => {
  const local = new URL(url);
  return local.pathname + local.search;
};
</script>
