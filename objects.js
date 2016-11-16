var playlist = {songName: ""};

updatePlaylist = (playlist, artistName, songTitle) => {
  playlist[artistName]=songTitle;
  return playlist;
}

removeFromPlaylist = (playlist, artistName) => {
  delete playlist[artistName];
  return playlist;
}