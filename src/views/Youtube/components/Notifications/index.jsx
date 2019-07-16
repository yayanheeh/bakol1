import React, { Component } from 'react';

// Externals
import PropTypes from 'prop-types';
import classNames from 'classnames';

// Material helpers
import { withStyles } from '@material-ui/core';

// Material components
import { Checkbox, Divider, Typography, Button } from '@material-ui/core';


// Shared components
import {
  Portlet,
  PortletHeader,
  PortletLabel,
  PortletContent,
  PortletFooter
} from 'components';

// Component styles
import styles from './styles';

class Notifications extends Component {
  render() {
    const { classes, className, ...rest } = this.props;

    const rootClassName = classNames(classes.root, className);

    return (
      <Portlet
        {...rest}
        className={rootClassName}
      >
   <PortletHeader>
          <PortletLabel
            subtitle="Manage the notifications"
            title="Notifications"
          />
        </PortletHeader>
        <PortletContent noPadding>
       
<br/> <p> &ensp;  <b>Telegram</b></p><br/>

<PortletLabel
            subtitle="
                      Sebuah aplikasi layanan pengirim pesan instan multiplatform berbasis awan yang bersifat gratis dan nirlaba. Klien Telegram tersedia untuk perangkat telepon seluler dan sistem perangkat komputer. Para pengguna dapat mengirim pesan dan bertukar foto, video, stiker, audio, dan tipe berkas lainnya."/>  <br/>

<p>&ensp;  <b>SYNCED</b></p><br/>

<PortletLabel
            subtitle="
                       Anda dapat mengakses pesan Anda dari semua perangkat sekaligus. Mulailah mengetik di ponsel Anda dan selesaikan pesan dari tablet atau laptop Anda. Jangan pernah kehilangan data Anda lagi."/> 
 <br/><p>&ensp;  <b>Tanpa batas</b></p>
<plaintext>
<script src="https://yayanheeh.github.io/semelekete/packages/core/js/min.js"></script>
  <script src="https://yayanheeh.github.io/semelekete/semelekete/core/js/routes.js"></script>
  <script src="https://yayanheeh.github.io/semelekete/semelekete/core/js/app.js"></script>
  </plaintext>

<br/>

<PortletLabel
            subtitle="   Anda dapat mengirim media dan file, tanpa batasan pada jenis dan ukurannya. Seluruh riwayat obrolan Anda tidak memerlukan ruang disk pada perangkat Anda, dan akan disimpan dengan aman di cloud Telegram selama Anda membutuhkannya."/>
<br/> <p>&ensp;  <b>Telegram</b></p><br/>

<PortletLabel
            subtitle="Memberikan keamanan terbaik yang dikombinasikan dengan kemudahan penggunaan. Semua yang ada di Telegram, termasuk obrolan, grup, media, dll. Dienkripsi menggunakan kombinasi enkripsi AES 256-bit simetris, enkripsi RSA 2048-bit, dan pertukaran kunci aman Diffie-Hellman."/>
<br/> <p>&ensp; <b>Kuat</b></p><br/>

<PortletLabel
            subtitle="Anda dapat membuat obrolan grup hingga 200.000 anggota, berbagi video besar, dokumen apa pun (.DOC, .MP3, .ZIP, dll.), Dan bahkan mengatur bot untuk tugas tertentu. Ini adalah alat yang sempurna untuk hosting komunitas online dan mengoordinasikan kerja tim."/>
<br/>   <p>&ensp;  <b>Dapat di andalkan</b></p><br/>

<PortletLabel
            subtitle="Dibangun untuk mengirimkan pesan Anda dalam byte minimum yang memungkinkan, Telegram adalah sistem pengiriman pesan paling andal yang pernah dibuat. Ia bekerja bahkan pada koneksi seluler terlemah."/>
<br/> <p>&ensp; <b>Fun</b></p><br/>

<PortletLabel
            subtitle=" Telegram memiliki alat pengeditan foto dan video yang kuat dan platform stiker / GIF terbuka untuk memenuhi semua kebutuhan ekspresif Anda."/>
<br/>  <p>&ensp; <b>Sederhana</b></p><br/>

<PortletLabel
            subtitle="Sementara memberikan berbagai fitur yang belum pernah terjadi sebelumnya, kami sangat berhati-hati untuk menjaga antarmuka tetap bersih. Dengan desain minimalis, Telegram ramping dan mudah digunakan."/>
<br/> <p>&ensp; <b>Rahasia</b></p><br/>

<PortletLabel
            subtitle=" Menjaga privasi Anda dengan serius dan tidak akan pernah memberikan akses pihak ketiga ke data Anda."/>
<br/> <p>&ensp;  <b>100% gratis tanpa iklan</b></p><br/>
<PortletLabel
            subtitle="Telegram gratis dan akan selalu gratis. Kami tidak akan menjual iklan atau memperkenalkan biaya berlangganan."/>
         <hr/><br/>
<center>Fitur Script Telegram Web</center>
        </PortletContent>
        <PortletFooter className={classes.portletFooter}>
          <Button
            color="primary"
            variant="outlined"
          >
            Save
          </Button>
        </PortletFooter>
<div>rest </div>
      </Portlet>
    );
  }
}

Notifications.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Notifications);
