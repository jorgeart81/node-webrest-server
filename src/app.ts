import { envs } from './config/env';
import { Server } from './presentation/server';
import express from 'express';

(() => {
  main();
})();

function main() {
  const server = new Server({ port: envs.PORT, publicPath: envs.PUBLIC_PATH });
  server.start();
}
